import { Card } from ".";
import BgCard from "../../assets/card-bg.png";
import Doctor from "../../assets/doctor.png";

const CardDoctor = ({ data, onClick, styles }) => {
  return (
    <div key={data.id_dokter}>
      <Card style={{ display: "flex", flexDirection: 'column', justifyContent: "center", cursor: "pointer", ...styles }} onClick={onClick}>
        <div className="carddoctor-head">
          <img src={BgCard} className="img-bg" />
          <img src={Doctor} className="img-doctor" />
        </div>

        <div className="carddoctor-body">
          <span className="name">{data.nama_dokter}</span>
          <span className="desc">{data.nama_poli}</span>
        </div>
      </Card>
    </div>
  );
};

export default CardDoctor;
