import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import LayerItem from './LayerItem'
// import DraggableList from 'react-draggable-list';
export default function LayerPopover({ style }) {
    const initialFocusRef = useRef()
    const [layers, setLayers] = useState([
        { id: 5, title: "Layer 5" },
        { id: 4, title: "Layer 4" },
        { id: 3, title: "Layer 3" },
        { id: 2, title: "Layer 2" },
        { id: 1, title: "Layer 1" },
    ]);
    const containerRef = useRef();
    return (
        <Popover
            initialFocusRef={initialFocusRef}
            placement='left'
            gutter={32}
        >
            <PopoverTrigger>
                <button className='rounded-md flex flex-col items-center gap-2'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41234 16.7855C1.05375 16.5165 0.880066 16.1636 0.891272 15.7265C0.902477 15.2895 1.08737 14.9365 1.44595 14.6676C1.69248 14.4883 1.96141 14.3987 2.25276 14.3987C2.54411 14.3987 2.81304 14.4883 3.05957 14.6676L12.1362 21.6935L21.2128 14.6676C21.4593 14.4883 21.7282 14.3987 22.0196 14.3987C22.3109 14.3987 22.5798 14.4883 22.8264 14.6676C23.185 14.9365 23.3698 15.2895 23.381 15.7265C23.3923 16.1636 23.2186 16.5165 22.86 16.7855L13.7834 23.845C13.2903 24.226 12.7413 24.4165 12.1362 24.4165C11.5311 24.4165 10.982 24.226 10.4889 23.845L1.41234 16.7855ZM10.4889 17.0544L2.75702 11.037C2.06226 10.4991 1.71489 9.79313 1.71489 8.91909C1.71489 8.04504 2.06226 7.33909 2.75702 6.80121L10.4889 0.783769C10.982 0.402777 11.5311 0.21228 12.1362 0.21228C12.7413 0.21228 13.2903 0.402777 13.7834 0.783769L21.5153 6.80121C22.2101 7.33909 22.5574 8.04504 22.5574 8.91909C22.5574 9.79313 22.2101 10.4991 21.5153 11.037L13.7834 17.0544C13.2903 17.4354 12.7413 17.6259 12.1362 17.6259C11.5311 17.6259 10.982 17.4354 10.4889 17.0544ZM12.1362 14.9029L19.8681 8.91909L12.1362 2.93526L4.40425 8.91909L12.1362 14.9029Z" fill="#1C1B1F" />
                    </svg>
                    <span className={`transition-all ease-in-out text-xs ${style}`}>Layers</span>
                </button>
            </PopoverTrigger>
            <PopoverContent bg='#E1E1E1' borderColor='#E1E1E1'>
                <PopoverBody>
                    <div
                        ref={containerRef}
                        style={{ touchAction: "pan-y"}}
                    >
                        {/* <DraggableList
                            itemKey="id"
                            template={LayerItem}
                            list={layers}
                            onMoveEnd={(newList) => setLayers(newList)}
                            container={() => containerRef.current}
                        /> */}
                    </div>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}