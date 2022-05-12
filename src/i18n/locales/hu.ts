// Hungarian


import { Locale } from "../locale";
export class hu implements Locale {
  atX0SecondsPastTheMinuteGt20(): string|null {
    return null;
  }
  atX0MinutesPastTheHourGt20(): string|null {
    return null;
  }
  commaMonthX0ThroughMonthX1(): string|null {
    return null;
  }
  commaYearX0ThroughYearX1(): string|null {
    return null;
  }

  use24HourTimeFormatByDefault() {
    return false;
  }

  anErrorOccuredWhenGeneratingTheExpressionD() {
    return "Hiba történt a kifejezésleírás generálásakor. Ellenőrizze a cron kifejezés szintaxisát.";
  }
  everyMinute() {
    return "minden percben";
  }
  everyHour() {
    return "minden órában";
  }
  atSpace() {
    return "Ekkor: ";
  }
  everyMinuteBetweenX0AndX1() {
    return "percenként %s és %s között";
  }
  at() {
    return "ekkor:";
  }
  spaceAnd() {
    return " és";
  }
  everySecond() {
    return "minden másodpercben";
  }
  everyX0Seconds() {
    return "minden %s másodpercben";
  }
  secondsX0ThroughX1PastTheMinute() {
    return "%s másodpercben %s perc után";
  }
  atX0SecondsPastTheMinute() {
    return "%s másodperccel a perc után";
  }
  everyX0Minutes() {
    return "minden %s percben";
  }
  minutesX0ThroughX1PastTheHour() {
    return "%s percben %s óra után";
  }
  atX0MinutesPastTheHour() {
    return "%s perccel az óra után";
  }
  everyX0Hours() {
    return "minden %s órában";
  }
  betweenX0AndX1() {
    return "%s és %s között";
  }
  atX0() {
    return "ekkor %s";
  }
  commaEveryDay() {
    return ", minden nap";
  }
  commaEveryX0DaysOfTheWeek() {
    return ", a hét minden %s napján";
  }
  commaX0ThroughX1() {
    return ", %s - %s";
  }
  first() {
    return "első";
  }
  second() {
    return "második";
  }
  third() {
    return "harmadik";
  }
  fourth() {
    return "negyedik";
  }
  fifth() {
    return "ötödik";
  }
  commaOnThe() {
    return ", a ";
  }
  spaceX0OfTheMonth() {
    return " a hónap %s";
  }
  lastDay() {
    return "az utolsó nap";
  }
  commaOnTheLastX0OfTheMonth() {
    return ", a hónap utolsó %s";
  }
  commaOnlyOnX0() {
    return ", csak ekkor: %s";
  }
  commaAndOnX0() {
    return ", és %s";
  }
  commaEveryX0Months() {
    return ", minden %s hónapban";
  }
  commaOnlyInX0() {
    return ", csak ekkor: %s";
  }
  commaOnTheLastDayOfTheMonth() {
    return ", a hónap utolsó napján";
  }
  commaOnTheLastWeekdayOfTheMonth() {
    return ", a hónap utolsó hétköznapján";
  }
  commaDaysBeforeTheLastDayOfTheMonth() {
    return ", %s nappal a hónap utolsó napja előtt";
  }
  firstWeekday() {
    return "első hétköznap";
  }
  weekdayNearestDayX0() {
    return "hétköznap legközelebbi nap %s";
  }
  commaOnTheX0OfTheMonth() {
    return ", a hónap %s";
  }
  commaEveryX0Days() {
    return ", %s naponként";
  }
  commaBetweenDayX0AndX1OfTheMonth() {
    return ", a hónap %s és %s napja között";
  }
  commaOnDayX0OfTheMonth() {
    return ", a hónap %s napján";
  }
  commaEveryHour() {
    return ", minden órában";
  }
  commaEveryX0Years() {
    return ", %s évente";
  }
  commaStartingX0() {
    return ", %s kezdettel";
  }
  daysOfTheWeek() {
    return ["vasárnap", "hétfőn", "kedden", "szerdán", "csütörtökön", "pénteken", "szombaton"];
  }
  monthsOfTheYear() {
    return [
      "január",
      "február",
      "március",
      "április",
      "május",
      "június",
      "július",
      "augusztus",
      "szeptember",
      "október",
      "november",
      "december",
    ];
  }
}
