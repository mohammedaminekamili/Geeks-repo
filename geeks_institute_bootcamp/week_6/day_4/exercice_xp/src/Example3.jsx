import data from "./data2.json"


const experience=data["Experiences"]

const Example3 = () => {
console.log(experience)
    return (
        <>
        {experience.map((x)=>(
            <div key={x.companyName}>
                <img src={x.logo} alt={x.companyName} />
                <h2><a href={x.url}>{x.companyName}</a></h2>
                {x.roles.map((y)=>(
                    <>
                    <h3 key={y.title}>{y.title}</h3>
                    <p>{y.startDate} {y.location}</p>
                    <p>{y.description}</p>
                    </>
                ))}
            </div>
        ))}
       </>
    )
}

export default Example3