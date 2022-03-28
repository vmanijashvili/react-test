import {useEffect, useState} from "react";
import "./dashboard.scss";
import Car from "../../components/car/car";

const Dashboard = (props) => {


    const [list, setList] = useState([]);

    const getImages = (item) => {
        if (item.pic_number > 0) {
            let images = [];
            for (let i = 1; i<item.pic_number; i++) {
                images.push('https://static.my.ge/myauto/photos/'+item.photo+'/thumbs/'+item.car_id+'_'+i+'.jpg');
            }
            return images;
        }
        return [];
    }

    const getData = () => {

        fetch('https://api2.myauto.ge/ka/products?TypeID=0&ForRent=&Mans=&CurrencyID=3&MileageType=1&Page=1')
            .then(response => response.json())
            .then(response => response.data.items)
            .then(items => {
                return items.map(item => {
                    return {
                        ...item,
                        images: getImages(item)
                    };
                });
            })
            .then(items => {
                setList(items)
            })


    }

    useEffect(() => {
        getData();
    }, []);




    return (<div className='product-page'>
        <div className='title'>პროდუქტები</div>
        {list.map((car_info, key) => {

            return <Car info={car_info} key={key} />;

        })}
    </div>);

}

export default Dashboard;