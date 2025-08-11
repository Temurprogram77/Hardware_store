import { List, Card, Image } from "../link/antLink";

interface Review {
  name: string;
  date: string;
  text: string;
  images: string[];
}

interface Props {
  item: Review[];
}

const NewList = ({ item }: Props) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={item}
      renderItem={(review) => (
        <List.Item>
          <Card>
            <h3 className="font-bold">{review.name}</h3>
            <p className="text-gray-500 text-[12px]">{review.date}</p>
            <p>{review.text}</p>

            {review.images.length > 0 && (
              <div className="flex gap-2 mt-2">
                {review.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`review-${index}`}
                    width={100}
                  />
                ))}
              </div>
            )}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default NewList;
