import React from 'react';
import logo from './logo.svg';
import './App.css';
import PictureSelect from './components/PictureSelect';

const App = () => {
    const [value, setValue] = React.useState(['1']);
    const pictures = [
        {
            id: '1',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
            id: '2',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
            id: '3',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
    ]; // 同上面的数据

    // 输出用户选择图片 id。
    console.log(value);
    return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
};


export default App;
