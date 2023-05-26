import './ShinyBtn.scss';

function ShinyBtn({ name = 'Button', href }) {
  return (
    <a className="ShinyBtn" href={href}>
      {name}
    </a>
  );
}

export default ShinyBtn;
