
import { Card } from "react-bootstrap";

function Educard(p) {
    return (<>

        <div className="col-md-4 educard" >
            <Card className="card">
                <Card.Body>
                    <p className="text-center date">{p.date}</p>
                    <Card.Title className="text-center title">{p.title}</Card.Title>
                    <Card.Subtitle className="text-center subtitle">{p.subtitle}</Card.Subtitle>

                    <Card.Text className="text-center para">
                        {p.para}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>






    </>);
}

export default Educard;