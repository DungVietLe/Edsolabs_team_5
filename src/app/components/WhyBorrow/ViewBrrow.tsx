import img1 from '../../../images/imageicon/img1.png';
import img2 from '../../../images/imageicon/img2.png';
import img3 from '../../../images/imageicon/img3.png';
import img4 from '../../../images/imageicon/img4.png';
import BorrowItems from './BorrowItems';
import { ViewInfor, ListBorrow, Text, BorrowCard } from './styled';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
export default function ViewBorrow() {
  const { t } = useTranslation();
  const list = [
    {
      id: 1,
      image: img1,
      title: `${t(messages.content1())}`,
      content: `${t(messages.des1())}`,
    },
    {
      id: 2,
      image: img2,
      title: `${t(messages.content2())}`,
      content: `${t(messages.des2())}`,
    },
    {
      id: 3,
      image: img3,
      title: `${t(messages.content3())}`,
      content: `${t(messages.des3())}`,
    },
    {
      id: 4,
      image: img4,
      title: `${t(messages.content4())}`,
      content: `${t(messages.des4())}`,
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
        <Text>{t(messages.title())}</Text>
        <ListBorrow>{render}</ListBorrow>
      </BorrowCard>
    </ViewInfor>
  );
}
