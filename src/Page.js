import './App.css';

function Title(props){
    return(
        <h1>{props.title}</h1>
    );
}

function Description(props){
    return(
        <p>{props.description}</p>
    )
}

function Page(){
    return(
        <div>
            <Title title="New page"/>
            <Description description="New description" />
        </div>
    );
}

export default Page;