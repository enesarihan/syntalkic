import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const SyntalkicCard = ({ id, role, topic, createdAt }: SyntalkicCardProps) => {
  const formattedDate = dayjs(createdAt || Date.now()).format("MMM D , YYYY");
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-syntalkic">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{topic}</p>
          </div>

          <h3 className="mt-5 capitalize">{role} Chat</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src={"/calendar.svg"}
                alt="calendar"
                width={22}
                height={22}
              />
              <p>{formattedDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image src={"/star.svg"} alt="star" width={22} height={22} />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <Button className="btn-primary">
            <Link href={`/syntalkic/${id}`}>View Syntalkic</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SyntalkicCard;
