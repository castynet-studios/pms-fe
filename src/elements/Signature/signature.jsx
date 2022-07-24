import style from './signature.module.scss';
import { Icons } from 'elements';

function Signature({ paddingTop, marginTop }) {
  const sty = {
    paddingTop: paddingTop,
    marginTop: marginTop
  };

  return (
    <div style={sty} className={style.signDiv}>
      <p>
        <Icons.Copyright size="15" /> Sagana Organic <br /> built by Castynet
        Studios
      </p>
    </div>
  );
}

export default Signature;
