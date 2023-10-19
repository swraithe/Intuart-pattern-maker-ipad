import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
} from '@chakra-ui/react'
import { Stack, Text, Select, Input } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useState } from 'react';


export default function NewArtboardDialog({ isOpen, onClose, onCreate }) {
    const [colorMode, setColorMode] = useState("RGB");
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(1000);
    const [widthUnit, setWidthUnit] = useState("px");
    const [heightUnit, setHeightUnit] = useState("px");
    
    const handleCreate = () => {
        onCreate({
            colorMode: colorMode,
            width: width,
            widthUnit: widthUnit,
            height: height,
            heightUnit: heightUnit,
        })
    }

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(3px) hue-rotate(90deg)'
            />
            <ModalContent className="!rounded-3xl">
                <ModalHeader>
                    <div className='flex gap-4 items-center'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 27.6043C12.1415 27.6043 10.3849 27.2464 8.73036 26.5304C7.07581 25.8145 5.63102 24.839 4.396 23.604C3.16097 22.369 2.1855 20.9241 1.46956 19.2695C0.753608 17.6148 0.39563 15.8582 0.39563 13.9995C0.39563 12.1182 0.762063 10.3505 1.49493 8.69636C2.22777 7.04225 3.22282 5.60192 4.48006 4.37536C5.73731 3.14878 7.20391 2.17885 8.87986 1.46556C10.5558 0.752273 12.345 0.39563 14.2475 0.39563C16.0593 0.39563 17.7714 0.707829 19.3837 1.33223C20.996 1.95663 22.4112 2.81967 23.6294 3.92136C24.8475 5.02305 25.8145 6.32793 26.5304 7.836C27.2464 9.34406 27.6044 10.9712 27.6044 12.7174C27.6044 15.3048 26.8226 17.3218 25.2591 18.7681C23.6955 20.2145 21.7681 20.9377 19.4768 20.9377H17.1935C17.0147 20.9377 16.8878 20.9879 16.8127 21.0884C16.7376 21.1889 16.7 21.3031 16.7 21.4312C16.7 21.6872 16.8507 22.0333 17.1522 22.4696C17.4536 22.9058 17.6044 23.4328 17.6044 24.0507C17.6044 25.2044 17.2696 26.085 16.6 26.6927C15.9304 27.3005 15.0638 27.6043 14 27.6043ZM6.76233 15.3333C7.34011 15.3333 7.81789 15.1444 8.19566 14.7667C8.57344 14.3889 8.76233 13.9111 8.76233 13.3333C8.76233 12.7556 8.57344 12.2778 8.19566 11.9C7.81789 11.5222 7.34011 11.3333 6.76233 11.3333C6.18455 11.3333 5.70677 11.5222 5.329 11.9C4.95122 12.2778 4.76233 12.7556 4.76233 13.3333C4.76233 13.9111 4.95122 14.3889 5.329 14.7667C5.70677 15.1444 6.18455 15.3333 6.76233 15.3333ZM10.7145 10.0717C11.2923 10.0717 11.7701 9.88284 12.1478 9.50506C12.5256 9.12729 12.7145 8.64951 12.7145 8.07173C12.7145 7.49395 12.5256 7.01617 12.1478 6.6384C11.7701 6.26062 11.2923 6.07173 10.7145 6.07173C10.1367 6.07173 9.65894 6.26062 9.28116 6.6384C8.90339 7.01617 8.7145 7.49395 8.7145 8.07173C8.7145 8.64951 8.90339 9.12729 9.28116 9.50506C9.65894 9.88284 10.1367 10.0717 10.7145 10.0717ZM17.2855 10.0717C17.8633 10.0717 18.3411 9.88284 18.7188 9.50506C19.0966 9.12729 19.2855 8.64951 19.2855 8.07173C19.2855 7.49395 19.0966 7.01617 18.7188 6.6384C18.3411 6.26062 17.8633 6.07173 17.2855 6.07173C16.7077 6.07173 16.2299 6.26062 15.8522 6.6384C15.4744 7.01617 15.2855 7.49395 15.2855 8.07173C15.2855 8.64951 15.4744 9.12729 15.8522 9.50506C16.2299 9.88284 16.7077 10.0717 17.2855 10.0717ZM21.2138 15.3333C21.7915 15.3333 22.2693 15.1444 22.6471 14.7667C23.0249 14.3889 23.2138 13.9111 23.2138 13.3333C23.2138 12.7556 23.0249 12.2778 22.6471 11.9C22.2693 11.5222 21.7915 11.3333 21.2138 11.3333C20.636 11.3333 20.1582 11.5222 19.7804 11.9C19.4027 12.2778 19.2138 12.7556 19.2138 13.3333C19.2138 13.9111 19.4027 14.3889 19.7804 14.7667C20.1582 15.1444 20.636 15.3333 21.2138 15.3333ZM13.9522 24.571C14.1402 24.571 14.2917 24.5184 14.4066 24.4132C14.5215 24.308 14.579 24.1712 14.579 24.0029C14.579 23.6918 14.411 23.3344 14.075 22.9308C13.739 22.5272 13.571 21.9138 13.571 21.0906C13.571 20.1307 13.9025 19.3597 14.5654 18.7775C15.2284 18.1954 16.0399 17.9043 17 17.9043H19.4768C20.9328 17.9043 22.1459 17.4792 23.1159 16.629C24.086 15.7788 24.571 14.4935 24.571 12.7732C24.571 10.0843 23.5485 7.85472 21.5036 6.08443C19.4587 4.31414 17.04 3.429 14.2474 3.429C11.2569 3.429 8.70625 4.45435 6.59536 6.50506C4.48445 8.5558 3.429 11.0554 3.429 14.0038C3.429 16.9303 4.4546 19.4231 6.5058 21.4822C8.557 23.5414 11.0391 24.571 13.9522 24.571Z" fill="#1C1B1F" />
                        </svg>
                        <svg width="334" height="26" viewBox="0 0 334 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.704 25.448C4.65333 25.448 2.54133 24.7867 1.368 23.464C0.557333 22.5253 0.152 21.2133 0.152 19.528C0.152 18.8027 0.226667 18.024 0.376 17.192L1.688 9.832C2.648 4.43467 6.11467 1.736 12.088 1.736C14.5627 1.736 16.44 2.26933 17.72 3.336C19 4.38133 19.64 5.82133 19.64 7.656C19.64 8.50933 19.512 9.36267 19.256 10.216C19.0213 11.048 18.7867 11.6667 18.552 12.072L18.2 12.712H12.536C13.24 11.9013 13.592 10.7493 13.592 9.256C13.592 8.46667 13.3893 7.848 12.984 7.4C12.5787 6.93067 11.9813 6.696 11.192 6.696C9.03733 6.696 7.75733 7.89067 7.352 10.28L6.232 16.744C6.12533 17.2987 6.072 17.8427 6.072 18.376C6.072 19.784 6.91467 20.488 8.6 20.488C10.6267 20.488 11.8427 19.3467 12.248 17.064H18.008L17.848 17.992C16.9947 22.9627 13.6133 25.448 7.704 25.448ZM35.9428 12.872C35.9428 13.5973 35.8148 14.3013 35.5588 14.984C35.3241 15.6667 35.0894 16.168 34.8548 16.488L34.5028 16.936H29.6708C30.2041 16.4453 30.4708 15.8373 30.4708 15.112C30.4708 14.728 30.3428 14.4187 30.0868 14.184C29.8521 13.928 29.5214 13.8 29.0948 13.8C28.3694 13.8 27.7401 14.1627 27.2068 14.888L25.4148 25H19.9748L22.6948 9.608H27.7508L27.3668 11.752C28.5828 10.024 30.0548 9.16 31.7828 9.16C33.1694 9.16 34.2041 9.49067 34.8868 10.152C35.5908 10.8133 35.9428 11.72 35.9428 12.872ZM43.3243 25.448C38.8869 25.448 36.6683 23.912 36.6683 20.84C36.6683 20.4133 36.7109 19.9547 36.7963 19.464L37.4683 15.496C37.8309 13.448 38.7696 11.88 40.2843 10.792C41.8203 9.68267 43.8469 9.128 46.3643 9.128C50.6523 9.128 52.7963 10.7493 52.7963 13.992C52.7963 14.4613 52.7536 14.9733 52.6683 15.528L52.2843 17.8H42.5243L42.3963 18.536C42.3536 18.792 42.3323 19.0267 42.3323 19.24C42.3323 20.4133 43.0256 21 44.4123 21C44.9243 21 45.3616 20.84 45.7243 20.52C46.0869 20.2 46.3003 19.8267 46.3643 19.4L51.6763 19.464C50.9723 23.4533 48.1883 25.448 43.3243 25.448ZM47.1643 15.848C47.2496 15.4853 47.2923 15.1547 47.2923 14.856C47.2923 14.536 47.1536 14.216 46.8763 13.896C46.5989 13.576 46.1509 13.416 45.5323 13.416C44.9349 13.416 44.3803 13.6187 43.8683 14.024C43.3776 14.4293 43.0363 15.0373 42.8443 15.848H47.1643ZM69.5245 20.072C69.5245 20.6267 69.8018 20.904 70.3565 20.904C70.9325 20.904 71.4125 20.7973 71.7965 20.584L71.6365 24.2C70.6125 25.032 69.4605 25.448 68.1805 25.448C65.8338 25.448 64.5325 24.5947 64.2765 22.888C63.2098 24.5947 61.6418 25.448 59.5725 25.448C56.0738 25.448 54.3245 23.944 54.3245 20.936C54.3245 20.424 54.3778 19.8587 54.4845 19.24L55.1565 15.496C55.4978 13.576 56.2765 12.0507 57.4925 10.92C58.7298 9.768 60.3298 9.192 62.2925 9.192C64.2765 9.192 65.6205 9.65067 66.3245 10.568L66.4845 9.608H71.3485L69.5565 19.688C69.5352 19.816 69.5245 19.944 69.5245 20.072ZM60.0525 18.536C60.0098 18.728 59.9885 18.9947 59.9885 19.336C59.9885 19.6773 60.1485 20.0187 60.4685 20.36C60.7885 20.68 61.3218 20.84 62.0685 20.84C62.8365 20.84 63.4978 20.5413 64.0525 19.944L65.0125 14.568C64.7778 14.0347 64.2232 13.768 63.3485 13.768C61.7058 13.768 60.7458 14.5573 60.4685 16.136L60.0525 18.536ZM80.6145 25.448C78.1398 25.448 76.3585 24.8933 75.2705 23.784C74.4598 22.9733 74.0545 21.8853 74.0545 20.52C74.0545 20.072 74.0972 19.592 74.1825 19.08L76.3585 6.696L82.2145 4.264L81.2865 9.608H90.1185L89.3185 14.12H80.4865L79.8465 17.736C79.7612 18.1413 79.7185 18.504 79.7185 18.824C79.7185 20.168 80.3585 20.84 81.6385 20.84C82.3212 20.84 82.8865 20.552 83.3345 19.976C83.8038 19.4 84.1238 18.632 84.2945 17.672H89.6065C88.7105 22.856 85.7132 25.448 80.6145 25.448ZM97.793 25.448C93.3557 25.448 91.137 23.912 91.137 20.84C91.137 20.4133 91.1797 19.9547 91.265 19.464L91.937 15.496C92.2997 13.448 93.2383 11.88 94.753 10.792C96.289 9.68267 98.3157 9.128 100.833 9.128C105.121 9.128 107.265 10.7493 107.265 13.992C107.265 14.4613 107.222 14.9733 107.137 15.528L106.753 17.8H96.993L96.865 18.536C96.8223 18.792 96.801 19.0267 96.801 19.24C96.801 20.4133 97.4943 21 98.881 21C99.393 21 99.8303 20.84 100.193 20.52C100.556 20.2 100.769 19.8267 100.833 19.4L106.145 19.464C105.441 23.4533 102.657 25.448 97.793 25.448ZM101.633 15.848C101.718 15.4853 101.761 15.1547 101.761 14.856C101.761 14.536 101.622 14.216 101.345 13.896C101.068 13.576 100.62 13.416 100.001 13.416C99.4037 13.416 98.849 13.6187 98.337 14.024C97.8463 14.4293 97.505 15.0373 97.313 15.848H101.633ZM126.977 15.176C126.977 14.2587 126.529 13.8 125.633 13.8C124.758 13.8 124.033 14.1307 123.457 14.792L121.665 25H116.225L118.945 9.608H124.001L123.649 11.496C124.907 9.93867 126.497 9.16 128.417 9.16C130.337 9.16 131.585 9.62933 132.161 10.568C132.523 11.1653 132.705 11.848 132.705 12.616C132.705 13.384 132.651 14.0987 132.545 14.76L131.681 19.688C131.659 19.816 131.649 19.9333 131.649 20.04C131.649 20.616 131.969 20.904 132.609 20.904C133.099 20.904 133.537 20.7973 133.921 20.584L133.761 24.2C132.758 25.032 131.617 25.448 130.337 25.448C127.435 25.448 125.985 24.232 125.985 21.8C125.985 21.3733 126.027 20.9147 126.113 20.424L126.881 16.168C126.945 15.784 126.977 15.4533 126.977 15.176ZM142.262 25.448C137.824 25.448 135.606 23.912 135.606 20.84C135.606 20.4133 135.648 19.9547 135.734 19.464L136.406 15.496C136.768 13.448 137.707 11.88 139.222 10.792C140.758 9.68267 142.784 9.128 145.302 9.128C149.59 9.128 151.734 10.7493 151.734 13.992C151.734 14.4613 151.691 14.9733 151.606 15.528L151.222 17.8H141.462L141.334 18.536C141.291 18.792 141.27 19.0267 141.27 19.24C141.27 20.4133 141.963 21 143.35 21C143.862 21 144.299 20.84 144.662 20.52C145.024 20.2 145.238 19.8267 145.302 19.4L150.614 19.464C149.91 23.4533 147.126 25.448 142.262 25.448ZM146.102 15.848C146.187 15.4853 146.23 15.1547 146.23 14.856C146.23 14.536 146.091 14.216 145.814 13.896C145.536 13.576 145.088 13.416 144.47 13.416C143.872 13.416 143.318 13.6187 142.806 14.024C142.315 14.4293 141.974 15.0373 141.782 15.848H146.102ZM179.598 9.608C179.897 10.504 180.046 11.6987 180.046 13.192C180.046 14.664 179.865 16.0827 179.502 17.448C179.139 18.8133 178.585 20.1147 177.838 21.352C177.113 22.568 176.089 23.56 174.766 24.328C173.465 25.0747 171.961 25.448 170.254 25.448C167.694 25.448 165.987 24.7333 165.134 23.304C163.598 24.7333 161.881 25.448 159.982 25.448C157.422 25.448 155.662 24.904 154.702 23.816C154.062 23.0907 153.742 22.0133 153.742 20.584C153.742 19.8373 153.827 19.0053 153.998 18.088L155.502 9.608H160.942L159.438 18.12C159.374 18.44 159.342 18.728 159.342 18.984C159.342 20.2 159.971 20.808 161.23 20.808C162.105 20.808 162.766 20.4347 163.214 19.688C163.662 18.92 164.046 17.5867 164.366 15.688L165.454 9.608H170.894L169.39 18.12C169.326 18.44 169.294 18.728 169.294 18.984C169.294 20.2 169.923 20.808 171.182 20.808C173.401 20.808 174.51 18.4827 174.51 13.832C174.51 12.744 174.425 11.5387 174.254 10.216L174.158 9.608H179.598ZM204.556 20.072C204.556 20.6267 204.833 20.904 205.388 20.904C205.964 20.904 206.444 20.7973 206.828 20.584L206.668 24.2C205.644 25.032 204.492 25.448 203.212 25.448C200.865 25.448 199.564 24.5947 199.308 22.888C198.241 24.5947 196.673 25.448 194.604 25.448C191.105 25.448 189.356 23.944 189.356 20.936C189.356 20.424 189.409 19.8587 189.516 19.24L190.188 15.496C190.529 13.576 191.308 12.0507 192.524 10.92C193.761 9.768 195.361 9.192 197.324 9.192C199.308 9.192 200.652 9.65067 201.356 10.568L201.516 9.608H206.38L204.588 19.688C204.566 19.816 204.556 19.944 204.556 20.072ZM195.084 18.536C195.041 18.728 195.02 18.9947 195.02 19.336C195.02 19.6773 195.18 20.0187 195.5 20.36C195.82 20.68 196.353 20.84 197.1 20.84C197.868 20.84 198.529 20.5413 199.084 19.944L200.044 14.568C199.809 14.0347 199.254 13.768 198.38 13.768C196.737 13.768 195.777 14.5573 195.5 16.136L195.084 18.536ZM224.318 12.872C224.318 13.5973 224.19 14.3013 223.934 14.984C223.699 15.6667 223.464 16.168 223.23 16.488L222.878 16.936H218.046C218.579 16.4453 218.846 15.8373 218.846 15.112C218.846 14.728 218.718 14.4187 218.462 14.184C218.227 13.928 217.896 13.8 217.47 13.8C216.744 13.8 216.115 14.1627 215.582 14.888L213.79 25H208.35L211.07 9.608H216.126L215.742 11.752C216.958 10.024 218.43 9.16 220.158 9.16C221.544 9.16 222.579 9.49067 223.262 10.152C223.966 10.8133 224.318 11.72 224.318 12.872ZM232.083 25.448C229.609 25.448 227.827 24.8933 226.739 23.784C225.929 22.9733 225.523 21.8853 225.523 20.52C225.523 20.072 225.566 19.592 225.651 19.08L227.827 6.696L233.683 4.264L232.755 9.608H241.587L240.787 14.12H231.955L231.315 17.736C231.23 18.1413 231.187 18.504 231.187 18.824C231.187 20.168 231.827 20.84 233.107 20.84C233.79 20.84 234.355 20.552 234.803 19.976C235.273 19.4 235.593 18.632 235.763 17.672H241.075C240.179 22.856 237.182 25.448 232.083 25.448ZM253.774 9.16C255.886 9.16 257.368 9.74667 258.222 10.92C258.862 11.752 259.182 12.7653 259.182 13.96C259.182 14.4507 259.128 14.9627 259.022 15.496L258.382 19.08C258.019 21.128 257.07 22.7067 255.534 23.816C254.019 24.904 252.099 25.448 249.774 25.448C247.47 25.448 245.699 24.9893 244.462 24.072C243.48 23.3467 242.99 22.3333 242.99 21.032C242.99 20.6907 243.022 20.3387 243.086 19.976L246.478 0.711998H251.918L250.286 10.024C251.182 9.448 252.344 9.16 253.774 9.16ZM253.486 15.976C253.507 15.8053 253.518 15.5707 253.518 15.272C253.518 14.952 253.379 14.6213 253.102 14.28C252.846 13.9173 252.27 13.736 251.374 13.736C250.499 13.736 249.87 14.0027 249.486 14.536L248.558 19.88C248.814 20.52 249.347 20.84 250.158 20.84C251.8 20.84 252.771 20.0187 253.07 18.376L253.486 15.976ZM270.616 9.16C272.92 9.16 274.658 9.66133 275.832 10.664C276.749 11.4533 277.208 12.552 277.208 13.96C277.208 14.4293 277.154 14.9413 277.048 15.496L276.376 19.24C275.97 21.5013 275.021 23.1013 273.528 24.04C272.056 24.9787 270.082 25.448 267.608 25.448C265.133 25.448 263.32 24.9787 262.168 24.04C261.314 23.336 260.888 22.28 260.888 20.872C260.888 20.3813 260.941 19.8373 261.048 19.24L261.72 15.496C262.466 11.272 265.432 9.16 270.616 9.16ZM271.48 16.136C271.522 15.9227 271.544 15.656 271.544 15.336C271.544 14.9947 271.405 14.6213 271.128 14.216C270.85 13.8107 270.36 13.608 269.656 13.608C268.973 13.608 268.397 13.8427 267.928 14.312C267.458 14.76 267.16 15.368 267.032 16.136L266.616 18.536C266.573 18.7493 266.552 19.0267 266.552 19.368C266.552 19.688 266.69 20.04 266.968 20.424C267.245 20.808 267.725 21 268.408 21C269.112 21 269.698 20.7653 270.168 20.296C270.637 19.8053 270.936 19.2187 271.064 18.536L271.48 16.136ZM294.118 20.072C294.118 20.6267 294.396 20.904 294.95 20.904C295.526 20.904 296.006 20.7973 296.39 20.584L296.23 24.2C295.206 25.032 294.054 25.448 292.774 25.448C290.428 25.448 289.126 24.5947 288.87 22.888C287.804 24.5947 286.236 25.448 284.166 25.448C280.668 25.448 278.918 23.944 278.918 20.936C278.918 20.424 278.972 19.8587 279.078 19.24L279.75 15.496C280.092 13.576 280.87 12.0507 282.086 10.92C283.324 9.768 284.924 9.192 286.886 9.192C288.87 9.192 290.214 9.65067 290.918 10.568L291.078 9.608H295.942L294.15 19.688C294.129 19.816 294.118 19.944 294.118 20.072ZM284.646 18.536C284.604 18.728 284.582 18.9947 284.582 19.336C284.582 19.6773 284.742 20.0187 285.062 20.36C285.382 20.68 285.916 20.84 286.662 20.84C287.43 20.84 288.092 20.5413 288.646 19.944L289.606 14.568C289.372 14.0347 288.817 13.768 287.942 13.768C286.3 13.768 285.34 14.5573 285.062 16.136L284.646 18.536ZM313.88 12.872C313.88 13.5973 313.752 14.3013 313.496 14.984C313.262 15.6667 313.027 16.168 312.792 16.488L312.44 16.936H307.608C308.142 16.4453 308.408 15.8373 308.408 15.112C308.408 14.728 308.28 14.4187 308.024 14.184C307.79 13.928 307.459 13.8 307.032 13.8C306.307 13.8 305.678 14.1627 305.144 14.888L303.352 25H297.912L300.632 9.608H305.688L305.304 11.752C306.52 10.024 307.992 9.16 309.72 9.16C311.107 9.16 312.142 9.49067 312.824 10.152C313.528 10.8133 313.88 11.72 313.88 12.872ZM329.806 20.072C329.806 20.6267 330.083 20.904 330.638 20.904C331.214 20.904 331.694 20.7973 332.078 20.584L331.918 24.2C330.894 25.032 329.742 25.448 328.462 25.448C326.115 25.448 324.814 24.5947 324.558 22.888C323.491 24.5947 321.923 25.448 319.854 25.448C316.355 25.448 314.606 23.944 314.606 20.936C314.606 20.424 314.659 19.8587 314.766 19.24L315.438 15.496C315.779 13.576 316.558 12.0507 317.774 10.92C319.011 9.768 320.718 9.192 322.894 9.192C324.238 9.192 325.304 9.48 326.094 10.056L327.726 0.711998H333.198L329.838 19.688C329.816 19.816 329.806 19.944 329.806 20.072ZM320.334 18.536C320.291 18.728 320.27 18.9947 320.27 19.336C320.27 19.6773 320.43 20.0187 320.75 20.36C321.07 20.68 321.603 20.84 322.35 20.84C323.118 20.84 323.779 20.5413 324.334 19.944L325.294 14.568C325.059 14.0347 324.504 13.768 323.63 13.768C321.987 13.768 321.027 14.5573 320.75 16.136L320.334 18.536Z" fill="black" />
                        </svg>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <p className="font-bold">Display Color Type</p>
                    <RadioGroup
                        className="mt-4"
                        onChange={setColorMode}
                        value={colorMode}>
                        <Stack direction='row' spacing="3">
                            <Radio value='CMYK'>CMYK</Radio>
                            <Radio value='RGB'>RGB</Radio>
                        </Stack>
                    </RadioGroup>
                    <p className="font-bold mt-8">Artboard Size</p>
                    <div className='flex items-center gap-8 mt-4'>
                        <div>
                            <Text>Height</Text>
                            <div className='flex items-center gap-2 mt-2'>
                                <Input variant='outline' borderColor="black" className='!rounded-full' value={height} onChange={(e) => setHeight(e.target.value)} />
                                <Select
                                    value={heightUnit}
                                    borderColor="black"
                                    onChange={(e) => setHeightUnit(e.target.value)}>
                                    <option value='px'>px</option>
                                    <option value='inch'>inch</option>
                                    <option value='cm'>cm</option>
                                    <option value='mm'>mm</option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <Text>Width</Text>
                            <div className='flex items-center gap-2 mt-2'>
                                <Input variant='outline' borderColor="black" className='!rounded-full' value={width} onChange={(e) => setWidth(e.target.value)} />
                                <Select
                                    value={widthUnit}
                                    borderColor="black"
                                    onChange={(e) => setWidthUnit(e.target.value)}>
                                    <option value='px'>px</option>
                                    <option value='inch'>inch</option>
                                    <option value='cm'>cm</option>
                                    <option value='mm'>mm</option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="rounded-full bg-[#fff] text-black border px-4 py-1 border-[#000] text-lg" onClick={onClose}>Close</button>
                    <button className="rounded-full bg-[#383838] border-[#383838] text-[#fff] border px-4 py-1 ml-2 text-lg" onClick={handleCreate}>Create</button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}