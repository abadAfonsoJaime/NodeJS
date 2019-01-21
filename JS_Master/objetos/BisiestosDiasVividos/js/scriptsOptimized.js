/* ++++++++++++++++++++ Declarar Variables ++++++++++++++++++++++++++++++++*/
var name = "Jaime";

var bornDay = 20;
var bornDayOutput;

var bornMonth = 1;
var bornMonthOutput;

var bornYear = 1990;

var currentDate = new Date(); //¿a cómo estamos?: fecha minutos ms huso horario....
var currentYear = currentDate.getFullYear(); // var currentYear = año en el que estamos;
var currentMonth = currentDate.getMonth(); // var currentMonth = mes en el que estamos;
var currentWeekDay = currentDate.getDay(); // var currentDay = número de la semana del día en el que estamos;
var currentDay = currentDate.getDate(); // var currentDay = número del día en el que estamos;
var myAge;

var BORN_MONTH_DAYS = 0; //Días que he vivido el mes que nací
var FIRST_YEAR_DAYS = 0; //Días que he vivido desde el mes siguiente al que nací hasta nochevieja del año que nací
var MIDDLE_YEARS_DAYS = 0; //Días que he vivido desde el año siguiente al que nací hasta nochevieja DEL AÑO ANTERIOR AL QUE ESTAMOS (añoActual - 1)
var CURRENT_YEAR_DAYS = 0; //Días que he vivido en el año en el que estamos (año actual) SIN CONTAR LOS DEL MES ACTUAL
//Ha que sumnar los días vividos en el mes actual
//-------------------
var i;
var totalDays;

/* January=31, February;, March=31, April=30, May=31, June=30,
 July=31, August=31, September=30, October=31, November=30, December=31 */


function bisiesto(year)
{
	if ((year % 4 == 0 && year % 100 != 0 )||
		(year % 400 == 0))
	{return true;}
	else
	{return false;}
}

function month31(month)
{
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
	{return true;}
	else
		{return false;}
}

function month30(month)
{
	if (month == 4 || month == 6 || month == 9 || month == 11)
	{return true;}
	else
		{return false;}
}

/* ++++++PROCESS++++++ */

if (bornDay < 10)
	{bornDayOutput = "0"+bornDay}
else
	{bornDayOutput = bornDay;}


bornMonth < 10 ?
	bornMonthOutput = "0"+bornMonth:
	bornMonthOutput = bornMonth;



/*  ------------myAge--------------  */

if  (bornMonth < currentMonth) 
		{myAge = (currentYear-bornYear);} 
else
{
	if (bornMonth > currentMonth)
		{myAge = (currentYear-bornYear-1);}
	else
	{
		if (bornDay < currentDay)
			{myAge = (currentYear-bornYear);}
		else
			{myAge = currentYear - myYear -1;}
	}
}

/*  -----------BORN_MONTH_DAYS (Conditional)-----------  */
if ( month31(bornMonth) === true )
	{BORN_MONTH_DAYS += (32 - bornDay);}
else
{
	if (month30(bornMonth) == true )
			{BORN_MONTH_DAYS = (31 - bornDay);}
		else
		{
			bisiesto(bornYear) ?
				BORN_MONTH_DAYS += (30 - bornDay):
				BORN_MONTH_DAYS += (29 - bornDay);
		}
}

/*  ----------FIRST_YEAR_DAYS (Loop)---------------  */
for	(i = bornMonth + 1; i < 13; i++)
{
	if (month31(i))
	 {FIRST_YEAR_DAYS += 31;}
	else
	{
		if (month30(i))
			{FIRST_YEAR_DAYS += 30;}
		else
		{
			bisiesto(bornYear) ?
				FIRST_YEAR_DAYS += 29: 
				FIRST_YEAR_DAYS += 28;
		}
	}
}

/*  -------------MIDDLE_YEARS_DAYS (Loop)--------------  */

for (i = bornYear + 1; i < currentYear; i++)
{
	bisiesto(i) ?
		MIDDLE_YEARS_DAYS += 366:
		MIDDLE_YEARS_DAYS += 365;
}

/*  -------------CURRENT_YEAR_DAYS (Loop)--------------  */
for	(i = 1; i < currentMonth; i++)
{
	if (month31(i))
	 {CURRENT_YEAR_DAYS += 31;}
	else
	{
		if (month30(i))
			{CURRENT_YEAR_DAYS += 30;}
		else
		{
			bisiesto(currentYear) ?
				CURRENT_YEAR_DAYS += 29: 
				CURRENT_YEAR_DAYS += 28;
		}
	}
}

totalDays = BORN_MONTH_DAYS + FIRST_YEAR_DAYS + MIDDLE_YEARS_DAYS + CURRENT_YEAR_DAYS +currentDay;
/*  -----------Sumar: currentDay (Conditional)-----------  */


document.write("My name is " + name + "." + "<br/>");

document.write("I was born in " + bornDayOutput + "/" + bornMonthOutput + "/" + bornYear + "," + "<br/>");

document.write("So I am " + (myAge) + " years old." + "<br/>");

document.write("And I have been living " + totalDays + " days.");

console.log(BORN_MONTH_DAYS);
console.log(FIRST_YEAR_DAYS);
console.log(MIDDLE_YEARS_DAYS);
console.log(CURRENT_YEAR_DAYS);
console.log(currentDay);
console.log("And I have been living "+totalDays+" days.");