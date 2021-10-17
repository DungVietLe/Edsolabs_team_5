import img1 from '../../../images/imageicon/img1.png';
import img2 from '../../../images/imageicon/img2.png';
import img3 from '../../../images/imageicon/img3.png';
import img4 from '../../../images/imageicon/img4.png';
import BorrowItems from './BorrowItems';
import { ViewInfor, ListBorrow, Text, BorrowCard } from './styled';
export default function ViewBorrow() {
  const list = [
    {
      id: 1,
      image: img1,
      title: 'Quicker than the bank',
      content:
        'Banks are yesterdays news. Get the money you need without having to wait.',
    },
    {
      id: 2,
      image: img2,
      title: 'Better interest rates',
      content:
        'P2P lending lets you negotiate with the lender to arrange the best possible interest rates.',
    },
    {
      id: 3,
      image: img3,
      title: 'Finance assets without selling',
      content:
        'Put your assets to work so you can continue to meet your financial obligations. ',
    },
    {
      id: 4,
      image: img4,
      title: 'No credit checks',
      content:
        'Borrow without the background checks. Anyone can get the financing they need.',
    },
  ];

  const render = list.map(item => {
    return (
      <BorrowItems
        key={item.id}
        image={item.image}
        title={item.title}
        content={item.content}
      />
    );
  });
  return (
    <ViewInfor>
      <BorrowCard>
        <Text>Why borrow with us?</Text>
        <ListBorrow>{render}</ListBorrow>
      </BorrowCard>
    </ViewInfor>
  );
}
