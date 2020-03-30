import React from "react";

export default class PictureSelect extends React.Component {

    constructor(props) {
        super(props);
        this.checkSet = new Set(props.value);
    }

    _inputSelectAll = (e) => {
        const {pictures, onChange} = this.props;
        const checked = e.target.checked;
        if (!checked) {
            onChange([]);
            this.checkSet.clear();
            return;

        }

        const value = [];
        for (let item of pictures) {
            value.push(item.id);
            this.checkSet.add(item.id)
        }
        onChange(value)
    }

    render() {
        const {pictures, value} = this.props;
        return <>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
                <input checked={value.length === pictures.length} onChange={this._inputSelectAll} type="checkbox"
                       name="vehicle" value="Bike"/>
                <div style={{fontSize: 13}}>已选中{value.length}个文件</div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'warp'
            }}>
                {pictures.map((item, index, arr) => {
                    const checked = value.indexOf(item.id) !== -1 ? true : false;
                    return <PictureBox checked={checked} onChange={this._onChangeBox} key={item.id} picData={item}/>
                })}
            </div>
        </>
    }

    _onChangeBox = (id, checked) => {
        checked ? this.checkSet.add(id) : this.checkSet.delete(id);
        this.props.onChange([...this.checkSet])
    }
}

class PictureBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }

    _onChange = () => {
        const {picData, onChange,checked} = this.props;
        onChange(picData.id, !checked)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.props.checked) {
            this.setState({
                checked: nextProps.checked
            })
        }

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        return nextState.checked !== this.state.checked

    }

    render() {
        const {picData} = this.props;
        const {checked} = this.state;

        return <div style={{position: 'relative', marginRight: 10, width: 120}}>
            <img style={{width: "100%"}}
                 src={picData.url}
            />
            <input onChange={this._onChange}
                   checked={checked}
                   style={{position: 'absolute', top: 0, left: 0,}}
                   type="checkbox"
            />
            <div style={{width: "100%", wordWrap: "break-word", fontSize: 12}}>{picData.name}.jpg</div>
        </div>
    }
}