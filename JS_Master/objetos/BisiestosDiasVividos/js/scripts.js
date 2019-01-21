
/* +++++++++++++++++++++++++ Programa Bisiestos +++++++++++++++++++++++++++++++++++ */

var name = "Jaime";

var bornDay = 20;
var bornDayOutput;

var bornMonth = 1;
var bornMonthOutput;

var bornYear = 1990;

var currentDate = new Date(); //¿a cómo estamos?: fecha, minutos, ms, huso horario....
var currentYear = currentDate.getFullYear(); // var currentYear = número del año en el que estamos;
var currentMonth = currentDate.getMonth(); // var currentMonth = número del mes en el que estamos;
var currentWeekDay = currentDate.getDay(); // var currentDay = número de la semana del día en el que estamos;
var currentDay = currentDate.getDate(); // var currentDay = número del día en el que estamos;

var myAge;

/* Las condiciones de bisiesto pueden depender del iterador(condition), o del currentYear */

/* Condiciones para saber si el bornYear es bisiesto*/
var case1 = bornYear % 4;
var case2 = bornYear % 100;
var case3 = bornYear % 400;
/* Condiciones para saber si el currentYear es bisiesto*/
var situation1 = currentYear % 4;
var situation2 = currentYear % 100;
var situation3 = currentYear % 400;

/* Declaramos variables dependientes del iterador como undefined: valores porque variarán en el bucle */
var condition1;
var condition2;
var condition3;

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
		{myAge = (currentYear - bornYear);} 
else
{
	if (bornMonth > currentMonth)
		{myAge = (currentYear - bornYear -1);}
	else
	{
		if (bornDay > currentDay)
			{myAge = (currentYear - bornYear -1);}
		else
			{myAge = currentYear - myYear;}
	}
}
/*  -----------BORN_MONTH_DAYS (Conditional)-----------  */
if (bornMonth == 1 || bornMonth == 3 || bornMonth == 5 || bornMonth == 7 || bornMonth == 8 || bornMonth == 10 || bornMonth == 12)
	{BORN_MONTH_DAYS += (32 - bornDay);}
else
{
	if (bornMonth == 4 || bornMonth == 6 || bornMonth == 9 || bornMonth == 11)
			{BORN_MONTH_DAYS = (31 - bornDay);}
		else
		{
			if ((case1 == 0 && case2 != 0)||
				(case3 == 0))
				{BORN_MONTH_DAYS += (30 - bornDay);}
			else 
				{BORN_MONTH_DAYS += (29 - bornDay);}
		}
}

/*  ----------FIRST_YEAR_DAYS (Loop)---------------  */
for	(i = bornMonth + 1; i < 13; i++)
{
	if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12)
	 {FIRST_YEAR_DAYS += 31;}
	else
	{
		if (i == 4 || i == 6 || i == 9 || i == 11)
			{FIRST_YEAR_DAYS += 30;}
		else
		{
			if ((case1 == 0 && case2 != 0)
				||(case3 == 0))
				{FIRST_YEAR_DAYS += 29;}
			else 
				{FIRST_YEAR_DAYS += 28;}
		}
	}
}
/*  -------------MIDDLE_YEARS_DAYS (Loop)--------------  */

for (i = bornYear + 1; i < currentYear; i++)
{
	condition1 = i % 4;
	condition2 = i % 100;
	condition3 = i % 400;


	if ((condition3 == 0)||
		(condition1 == 0 && condition2 != 0))
		{MIDDLE_YEARS_DAYS += 366;}
	else
		{MIDDLE_YEARS_DAYS += 365;}
}

/*  -------------CURRENT_YEAR_DAYS (Loop)--------------  */
for	(i = 1; i < currentMonth; i++)
{
	if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12)
	 {CURRENT_YEAR_DAYS += 31;}
	else
	{
		if (i == 4 || i == 6 || i == 9 || i == 11)
			{CURRENT_YEAR_DAYS += 30;}
		else
		{
			if ((situation1 == 0 && situation2 != 0)
				||(situation3 == 0))
				{CURRENT_YEAR_DAYS += 29;}
			else 
				{CURRENT_YEAR_DAYS += 28;}
		}
	}
}


/* +++++ OUTPUT +++++ */

console.log("My name is "+name+".");
document.write("My name is "+name+"."+"<br/>");

console.log("I was born in "+bornDayOutput+"/"+bornMonthOutput+"/"+bornYear+".");
document.write("I was born in "+bornDayOutput+"/"+bornMonthOutput+"/"+bornYear+"."+"<br/>");

console.log("So I am "+(myAge)+" years old.");
document.write("So I am "+(myAge)+" years old."+"<br/>");

console.log(BORN_MONTH_DAYS);
console.log(FIRST_YEAR_DAYS);
console.log(MIDDLE_YEARS_DAYS);
console.log(CURRENT_YEAR_DAYS);
console.log(currentDay);

console.log("And I have been living "+ (BORN_MONTH_DAYS + FIRST_YEAR_DAYS + MIDDLE_YEARS_DAYS + CURRENT_YEAR_DAYS + currentDay)+" days.");
document.write("And I have been living "+ (BORN_MONTH_DAYS + FIRST_YEAR_DAYS + MIDDLE_YEARS_DAYS + CURRENT_YEAR_DAYS + currentDay)+" days.");

/* ------------------------------------------------------- */
