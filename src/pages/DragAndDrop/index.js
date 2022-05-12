import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import React, { useState } from 'react';
import './drag-and-drop.scss';

const finalSpaceCharacters = [
    {
        id: 'whale',
        name: 'hôm',
        thumb: 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/whale.jpg?alt=media&token=6ebec57c-4045-480d-a537-f582bbea354a'
    },
    {
        id: 'cat',
        name: 'trời',
        thumb: 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/cat.jpg?alt=media&token=60235451-1a8b-4583-9b00-482c9ea627ed'
    },
    {
        id: 'chicken',
        name: 'nay',
        thumb: 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/chicken.jpg?alt=media&token=7e55b0bc-f63b-4053-aec2-16e9de362882'
    },
    {
        id: 'dog',
        name: "to",
        thumb: 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/dog.jpg?alt=media&token=d8a61d27-47d5-4df7-9852-5f54ac3b61e7'
    },
    {
        id: 'duck',
        name: "mưa",
        thumb: 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/duck.jpg?alt=media&token=7651b0d5-ec78-4c54-955a-bfd1009e16c5'
    }
]


const DragAndDrop = () => {

    const [characters, setCharacters] = useState(finalSpaceCharacters);
    const [answerResult, setAnswerResult] = useState('');

    const handleDrags = (result) => {

        if (!result.destination) return; //Không tồn tại thì return ngay

        // console.log(result); 
        // result có các thuộc tính: 
        // + source (object chứa id ban đầu)
        // + destination (object chứa id cuối sau di chuyển)
        // + draggableId = id trong finalSpaceCharacters
        let items = Array.from(characters); //copy old array
        const [reorderedItems] = items.splice(result.source.index, 1) //xóa 1 phần tử ở vị trí 'result.source.index', return object vừa đem xóa
        items.splice(result.destination.index, 0, reorderedItems);
        // xóa đi 0 phần tử, nhét (những) phần tử reorderedItems vào vị trí `result.destination.index` trong mảng

        setCharacters(items);
    }

    const checkResult = () => {
        const namesNow = characters.map(c => c.name);
        console.log(`value = ${JSON.stringify(namesNow)}`);
        if (JSON.stringify(namesNow) == JSON.stringify(['hôm', 'nay', 'trời', 'mưa', 'to'])) {
            console.log("RIGHT ANSWER");
            setAnswerResult(true);
        } else {
            console.log("WRONG ANSWER");
            setAnswerResult(false);
        }
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h2>Bạn hãy kéo thả, sắp xếp chữ thành câu có nghĩa nhé.</h2>
                <DragDropContext onDragEnd={handleDrags}>
                    <Droppable droppableId='characters' direction='horizontal'>
                        {(provided) => (
                            <ul
                                className='characters' {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {characters.map(({ id, name, thumb }, index) => {
                                    return (
                                        <Draggable
                                            key={id}
                                            draggableId={id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <div className='characters-thumb'>
                                                        <img src={thumb} alt={`${name} Thumb`} />
                                                    </div>
                                                    <p>
                                                        {name}
                                                    </p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                                {/* ngăn việc đáy dưới bị trồi sụt */}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className='button' onClick={checkResult}>
                    Kiểm tra kết quả
                </div>

                {answerResult === true ?
                    <div className='true'>
                        <span className='space'>Câu trả lời chính xác</span>
                        <SentimentVerySatisfiedOutlinedIcon />
                    </div> : answerResult === false ?
                        <div className='false'>
                            <span className='space'>Câu trả lời sai mất rồi</span>
                            <SentimentDissatisfiedOutlinedIcon/>
                        </div> : ''
                }
            </header>
        </div>
    );
}

export default DragAndDrop;