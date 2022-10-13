import {
  addDays,
  subDays,
  format,
  formatISO,
  differenceInDays,
} from "date-fns";
import { ptBR } from "date-fns/locale";

import { Icon } from "~/components/Icon";

export const DateSelect = ({ currentDate, onChange }) => {
  const date = new Date(currentDate);
  const firstEventDate = new Date(2022, 10, 20);

  const canPrevDay = () => {
    if (differenceInDays(date, firstEventDate) == 0) {
      return false;
    }
    return true;
  };

  const prevDay = () => {
    if (!canPrevDay()) return;
    const nextDate = subDays(date, 1);
    onChange(formatISO(nextDate));
  };

  const nextDay = () => {
    const nextDate = addDays(date, 1);
    onChange(formatISO(nextDate));
  };

  return (
    <div className="p-4 flex space-x-4 items-center justify-center">
      <Icon
        name="arrowLeft"
        className={`w-6 cursor-pointer ${canPrevDay() ? "text-red-500" : "text-gray-300"}`}
        onClick={prevDay}
      />
      <span className="font-bold">
        {format(date, "d 'de' MMMM", { locale: ptBR })}
      </span>
      <Icon name="arrowRight" className="w-6 cursor-pointer text-red-500" onClick={nextDay} />
    </div>
  );
};
