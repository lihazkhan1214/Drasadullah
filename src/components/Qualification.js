import Educard from "./Educard";
import Educarddata from "./Educarddata";
function Qualification() {
    return (<>

        <div className="row qualification mt-5">

            <div className="col-10 mx-auto">

                <div className="row gy-3 d-flex justify-content-between">
{
              Educarddata.map((val,ind)=>{
                     return <Educard key={ind}  date={val.date}  title={val.title} subtitle={val.subtitle} para={val.para} />
              })
            }
                </div>

            </div>



        </div>

    </>);
}

export default Qualification;





