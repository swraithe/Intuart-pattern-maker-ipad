import { useEffect, useState } from "react";

export default function ClipboardItem({ item, onSelected }) {

    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        }
        reader.readAsDataURL(item);
    }, [item]);

    return (
        <div className="bg-[#FFF] rounded-xl flex flex-col items-center p-4 cursor-pointer" onClick={onSelected}>
            {
                previewUrl ? (
                    <img src={previewUrl} className="w-20 h-20 rounded-md object-cover"/>
                ) : (
                    <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 60.0001V54.0001H21V42.0001H15C10.85 42.0001 7.3125 40.5376 4.3875 37.6126C1.4625 34.6876 0 31.1501 0 27.0001C0 24.0001 0.825 21.2376 2.475 18.7126C4.125 16.1876 6.35 14.3501 9.15 13.2001C9.6 9.45006 11.2375 6.31256 14.0625 3.78756C16.8875 1.26256 20.2 6.10352e-05 24 6.10352e-05C27.8 6.10352e-05 31.1125 1.26256 33.9375 3.78756C36.7625 6.31256 38.4 9.45006 38.85 13.2001C41.65 14.3501 43.875 16.1876 45.525 18.7126C47.175 21.2376 48 24.0001 48 27.0001C48 31.1501 46.5375 34.6876 43.6125 37.6126C40.6875 40.5376 37.15 42.0001 33 42.0001H27V54.0001H45V60.0001H3Z" fill="#1C1B1F" />
                    </svg>
                )
            }
            <p className="font-bold mt-2 w-full truncate mx-2 text-center">{item.name}</p>
        </div>
    )
}