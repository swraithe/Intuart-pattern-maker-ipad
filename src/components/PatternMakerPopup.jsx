import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
} from '@chakra-ui/react'
import { useRef } from 'react'
import PatternItem from './PatternItem'
import useDataContext from '../context/useDataContext';
export default function PatternMakerPopup({ style }) {
    const { patterns, setPatterns } = useDataContext();

    const onLoadImage = (e) => {
        console.log('asdf')
        if (e.target.files.length > 0) {
            setPatterns([
                ...patterns,
                e.target.files[0]
            ])
        }
    }
    const initialFocusRef = useRef()
    return (
        <Popover
            initialFocusRef={initialFocusRef}
            placement='left'
            gutter={32}
        >
            <PopoverTrigger>
                <button className='rounded-md flex flex-col items-center gap-2'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.91659 24.783C1.49078 24.6933 1.09298 24.4636 0.723191 24.0938C0.353404 23.724 0.123688 23.3262 0.0340424 22.9004L22.3557 0.578735C22.8264 0.690792 23.2298 0.920508 23.5659 1.26788C23.9021 1.61526 24.1374 2.01306 24.2719 2.46129L1.91659 24.783ZM0.0340424 16.3115V12.5464L12.0017 0.578735H15.7668L0.0340424 16.3115ZM0.0340424 5.95746V3.2681C0.0340424 2.52852 0.297376 1.8954 0.824042 1.36874C1.35071 0.842069 1.98383 0.578735 2.7234 0.578735H5.41276L0.0340424 5.95746ZM18.8596 24.783L24.2383 19.4043V22.0936C24.2383 22.8332 23.975 23.4663 23.4483 23.993C22.9216 24.5196 22.2885 24.783 21.5489 24.783H18.8596ZM8.50553 24.783L24.2383 9.05022V12.8153L12.2706 24.783H8.50553Z" fill="#1C1B1F" />
                    </svg>
                    <span className={`transition-all ease-in-out text-xs ${style}`}>Pattern Maker</span>
                </button>
            </PopoverTrigger>
            <PopoverContent bg='#E1E1E1' borderColor='#E1E1E1' className="!rounded-3xl">
                <PopoverBody>
                    <div className='flex flex-col items-center w-full p-2'>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {
                                patterns?.map((item, index) => (
                                    <PatternItem item={item} key={index} />
                                ))
                            }
                        </div>
                        <label className="rounded-full bg-[#383838] border-[#383838] text-[#fff] border px-4 py-1 ml-2 text-lg inline-flex gap-2 mt-4 items-center" htmlFor='patternPicker'>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 18C1.95 18 1.47917 17.8042 1.0875 17.4125C0.695833 17.0208 0.5 16.55 0.5 16V2C0.5 1.45 0.695833 0.979167 1.0875 0.5875C1.47917 0.195833 1.95 0 2.5 0H10.5C10.7833 0 11.0208 0.0958333 11.2125 0.2875C11.4042 0.479167 11.5 0.716667 11.5 1C11.5 1.28333 11.4042 1.52083 11.2125 1.7125C11.0208 1.90417 10.7833 2 10.5 2H2.5V16H16.5V8C16.5 7.71667 16.5958 7.47917 16.7875 7.2875C16.9792 7.09583 17.2167 7 17.5 7C17.7833 7 18.0208 7.09583 18.2125 7.2875C18.4042 7.47917 18.5 7.71667 18.5 8V16C18.5 16.55 18.3042 17.0208 17.9125 17.4125C17.5208 17.8042 17.05 18 16.5 18H2.5ZM14.5 4H13.5C13.2167 4 12.9792 3.90417 12.7875 3.7125C12.5958 3.52083 12.5 3.28333 12.5 3C12.5 2.71667 12.5958 2.47917 12.7875 2.2875C12.9792 2.09583 13.2167 2 13.5 2H14.5V1C14.5 0.716667 14.5958 0.479167 14.7875 0.2875C14.9792 0.0958333 15.2167 0 15.5 0C15.7833 0 16.0208 0.0958333 16.2125 0.2875C16.4042 0.479167 16.5 0.716667 16.5 1V2H17.5C17.7833 2 18.0208 2.09583 18.2125 2.2875C18.4042 2.47917 18.5 2.71667 18.5 3C18.5 3.28333 18.4042 3.52083 18.2125 3.7125C18.0208 3.90417 17.7833 4 17.5 4H16.5V5C16.5 5.28333 16.4042 5.52083 16.2125 5.7125C16.0208 5.90417 15.7833 6 15.5 6C15.2167 6 14.9792 5.90417 14.7875 5.7125C14.5958 5.52083 14.5 5.28333 14.5 5V4ZM8.75 13L6.9 10.525C6.8 10.3917 6.66667 10.325 6.5 10.325C6.33333 10.325 6.2 10.3917 6.1 10.525L4.1 13.2C3.96667 13.3667 3.95 13.5417 4.05 13.725C4.15 13.9083 4.3 14 4.5 14H14.5C14.7 14 14.85 13.9083 14.95 13.725C15.05 13.5417 15.0333 13.3667 14.9 13.2L12.15 9.525C12.05 9.39167 11.9167 9.325 11.75 9.325C11.5833 9.325 11.45 9.39167 11.35 9.525L8.75 13Z" fill="white" />
                            </svg>
                            Import Image
                        </label>
                        <input type="file" className='hidden' id='patternPicker' onChange={onLoadImage} />
                    </div>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}