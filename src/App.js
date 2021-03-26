import { useState } from "react";
import "./styles.css";
export default function App() {
    const [imageUrl, selectUrl] = useState(
        "https://dog.ceo/api/breed/affenpinscher/images/random"
    );
    const [breed, selectBreed] = useState("affenpinscher");
    //   const [obj,setObj] = useState([]);
    //   const res = await fetch("https://dog.ceo/api/breeds/list/all").then((ans)=>{
    //     setObj(ans)
    // })
    const obj = {
        message: {
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: [],
            australian: ["shepherd"],
            basenji: [],
            beagle: [],
            bluetick: [],
            borzoi: [],
            bouvier: [],
            boxer: [],
            brabancon: [],
            briard: [],
            buhund: ["norwegian"],
            bulldog: ["boston", "english", "french"],
            bullterrier: ["staffordshire"],
            cairn: [],
            cattledog: ["australian"],
            chihuahua: [],
            chow: [],
            clumber: [],
            cockapoo: [],
            collie: ["border"],
            coonhound: [],
            corgi: ["cardigan"],
            cotondetulear: [],
            dachshund: [],
            dalmatian: [],
            dane: ["great"],
            deerhound: ["scottish"],
            dhole: [],
            dingo: [],
            doberman: [],
            elkhound: ["norwegian"],
            entlebucher: [],
            eskimo: [],
            finnish: ["lapphund"],
            frise: ["bichon"],
            germanshepherd: [],
            greyhound: ["italian"],
            groenendael: [],
            havanese: [],
            hound: [
                "afghan",
                "basset",
                "blood",
                "english",
                "ibizan",
                "plott",
                "walker"
            ],
            husky: [],
            keeshond: [],
            kelpie: [],
            komondor: [],
            kuvasz: [],
            labradoodle: [],
            labrador: [],
            leonberg: [],
            lhasa: [],
            malamute: [],
            malinois: [],
            maltese: [],
            mastiff: ["bull", "english", "tibetan"],
            mexicanhairless: [],
            mix: [],
            mountain: ["bernese", "swiss"],
            newfoundland: [],
            otterhound: [],
            ovcharka: ["caucasian"],
            papillon: [],
            pekinese: [],
            pembroke: [],
            pinscher: ["miniature"],
            pitbull: [],
            pointer: ["german", "germanlonghair"],
            pomeranian: [],
            poodle: ["miniature", "standard", "toy"],
            pug: [],
            puggle: [],
            pyrenees: [],
            redbone: [],
            retriever: ["chesapeake", "curly", "flatcoated", "golden"],
            ridgeback: ["rhodesian"],
            rottweiler: [],
            saluki: [],
            samoyed: [],
            schipperke: [],
            schnauzer: ["giant", "miniature"],
            setter: ["english", "gordon", "irish"],
            sheepdog: ["english", "shetland"],
            shiba: [],
            shihtzu: [],
            spaniel: [
                "blenheim",
                "brittany",
                "cocker",
                "irish",
                "japanese",
                "sussex",
                "welsh"
            ],
            springer: ["english"],
            stbernard: [],
            terrier: [
                "american",
                "australian",
                "bedlington",
                "border",
                "dandie",
                "fox",
                "irish",
                "kerryblue",
                "lakeland",
                "norfolk",
                "norwich",
                "patterdale",
                "russell",
                "scottish",
                "sealyham",
                "silky",
                "tibetan",
                "toy",
                "westhighland",
                "wheaten",
                "yorkshire"
            ],
            vizsla: [],
            waterdog: ["spanish"],
            weimaraner: [],
            whippet: [],
            wolfhound: ["irish"]
        },
        status: "success"
    };

    // const Object = {...Object.leys(obj.message)}
    console.log(obj.message[5]);
    function handle(e) {
        console.log(e.target.value);
        selectBreed(e.target.value);
        selectUrl(`https://dog.ceo/api/breed/${e.target.value}/images/random`);
    }
    return (
        <div className="App">
            <h1>Paw Select</h1>
            <div className="dropDown">
                <select onChange={handle}>
                    <option hidden disabled selected>
                        Select your breed
                    </option>
                    {Object.keys(obj.message).map((item, itemIndex) => {
                        if (obj.message[item].length == 0)
                            return (
                                <option key={itemIndex} value={item}>
                                    {item}
                                </option>
                            );
                        else {
                            // console.log("hello");
                            console.log(obj.message[item]);

                            return (
                                <optgroup label={item}>
                                    {obj.message[item].map((item1, index) => {
                                        return (
                                            <option value={item + "/" + item1}>
                                                {item1}
                                            </option>
                                        );
                                    })}
                                </optgroup>
                            );
                        }
                    })}
                </select>
            </div>
            <div className="image">
                <img src={imageUrl} alt={breed}></img>
            </div>
        </div>
    );
}
