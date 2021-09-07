import Card from '../comps/Card'

const Cardlist = ({robots}) => {
    return (
        <div>
            {
            robots.map((arr, i) => {
                return (
                    <Card
                     key={i}
                     id={robots[i].id}
                     name={robots[i].name}
                     email={robots[i].email}
                    />
                );
            })
        }
        </div>
    );
    

}

export default Cardlist;
