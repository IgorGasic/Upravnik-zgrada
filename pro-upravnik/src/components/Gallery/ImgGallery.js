import React, { useEffect, useState } from 'react';
import TagButton from './TagButton';
import {GalleryContainer, ImageCard, Image, Tags} from './Gallery.styled';
import { SRLWrapper } from 'simple-react-lightbox';


const images = [
    {id: '1', imageName: 'cev1.jpg', tag:'vodovod', alt:'upravnik'},
    {id: '2', imageName: 'cev2.jpg', tag:'vodovod', alt:'Kompletna sanacija trulog krova'},
    {id: '3', imageName: 'cev3.jpg', tag:'vodovod', alt:'Novi postanski sanducici'},
    {id: '4', imageName: 'cev4.jpg', tag:'vodovod', alt:'Izgled uradjenog novog krova'},
    {id: '5', imageName: 'led1.jpg', tag:'led svetla', alt:'Izgled uradjenog novog krova'},
    {id: '6', imageName: 'led2.jpg', tag:'led svetla', alt:'Izgled trulog krova'},
    {id: '7', imageName: 'pp1.jpg', tag:'pp aparat', alt:'Sanducici'},
    {id: '8', imageName: 'pp2.jpg', tag:'pp aparat', alt:'Postavljanje osb ploca, folije i trapezastog lima'},
    {id: '9', imageName: 'krov1.jpg', tag:'krov', alt:'upravnik9'},
    {id: '10', imageName: 'krov2.jpg', tag:'krov', alt:'upravnik'},
    {id: '11', imageName: 'krov3.jpg', tag:'krov', alt:'Kompletna sanacija trulog krova'},
    {id: '12', imageName: 'krov4.jpg', tag:'krov', alt:'Novi postanski sanducici'},
    {id: '13', imageName: 'krov5.jpg', tag:'krov', alt:'Izgled uradjenog novog krova'},
    {id: '14', imageName: 'krov6.jpg', tag:'krov', alt:'Izgled uradjenog novog krova'},
    {id: '15', imageName: 'sanduce.jpg', tag:'sanduce', alt:'Izgled trulog krova'},
    {id: '16', imageName: 'sanduce2.jpg', tag:'sanduce', alt:'Sanducici'}
]

    const options = {
        settings: {
        overlayColor: 'rgba(0,0,0,0)'
        },
        buttons: {
            showAutoplayButton: false,
            showDownloadButton: false,
        }
    }

const ImgGallery = () => {

    const[tag, setTag] = useState('sve slike');
    const[filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        tag == 'sve slike' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag == tag))
    },[tag]);


    return (
        <>
          <Tags>
            <TagButton name="sve slike" handleSetTag={setTag}/>
            <TagButton name="pp aparat" handleSetTag={setTag}/>
            <TagButton name="sanduce" handleSetTag={setTag}/>
            <TagButton name="vodovod" handleSetTag={setTag}/>
            <TagButton name="krov" handleSetTag={setTag}/>
            <TagButton name="led svetla" handleSetTag={setTag}/>
          </Tags>
          <SRLWrapper options={options}>
            <GalleryContainer>
                {filteredImages.map(image => (
                <ImageCard key={image.id}>
                <a href={`/images/${image.imageName}`}>
                <Image src={`/images/${image.imageName}`} alt={image.alt} /></a></ImageCard>))}
            </GalleryContainer>
           </SRLWrapper>
        </>
    )
}

export default ImgGallery
