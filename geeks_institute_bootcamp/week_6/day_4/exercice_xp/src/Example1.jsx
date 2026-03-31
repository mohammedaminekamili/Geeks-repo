import data from "./data2.json"


const Example1=()=>{

    const socialMedia=data["SocialMedias"]
    return <>
    <ul>
    {socialMedia.map((x) => (
        <li>{x}</li>
    ))}

    </ul>
    </>

}

export default Example1
