const Footer = ({ items }) => {
  if (!items.length) {
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const all = items.length;
  const packeds = items.filter(item => item.packed).length;

  const percentage = Math.round((packeds / all) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? `You've got everything! Ready to go ✈️`
          : `👜 You have ${all} items on your list, and you already packed ${packeds}
            ${all !== 0 && ` (${percentage}%)`}.`}
      </em>
    </footer>
  );
};

export default Footer;
