const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFamaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Алена",
            "id_5": "Дарья",
            "id_6": "Наталья",
            "id_7": "Ксения",
            "id_8": "Оксана",
            "id_9": "Елена",
            "id_10": "Анастасия"
        }
    }`,

    professionFamaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "программист",
            "id_2": "проводница",
            "id_3": "кондуктор",
            "id_4": "повар",
            "id_5": "флорист"
        }
    }`,

    professionMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "программист",
            "id_2": "кладовщик",
            "id_3": "пекарь",
            "id_4": "охранник",
            "id_5": "машинист"
        }
    }`,

    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,

    patronymicFamaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михайловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {

        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFamaleJson);
        }

    },


     randomSurname: function(gender) {

        if (gender == this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + 'а';
        } else {
            return this.randomValue(this.surnameJson);
        }

    },

    randomGender: function() {

        let g = this.randomIntNumber();
        if (g == 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }

    },

    randomProfession: function(gender) {

        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFamaleJson);
        }

    },

    randomPatronymic: function(gender) {

        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.patronymicMaleJson);
        } else {
            return this.randomValue(this.patronymicFamaleJson);
        }

    },

    randomBorn: function() {

        let year = this.randomIntNumber(2003, 1940);
        let m = this.randomIntNumber(12, 1);
        let month;
        let day;

        switch (m) {
            case 1:
                month = ' января ';
                day = this.randomIntNumber(31, 1);
                break;
            case 2:
                month = ' февраля ';
                day = this.randomIntNumber(28, 1);
                break;
            case 3:
                month = ' марта ';
                day = this.randomIntNumber(31, 1);
                break;
            case 4:
                month = ' апреля ';
                day = this.randomIntNumber(30, 1);
                break;
            case 5:
                month = ' мая ';
                day = this.randomIntNumber(31, 1);
                break;
            case 6:
                month = ' июня ';
                day = this.randomIntNumber(30, 1);
                break;
            case 7:
                month = ' июля ';
                day = this.randomIntNumber(31, 1);
                break;
            case 8:
                month = ' августа ';
                day = this.randomIntNumber(31, 1);
                break;
            case 9:
                month = ' сентября ';
                day = this.randomIntNumber(30, 1);
                break;
            case 10:
                month = ' октября ';
                day = this.randomIntNumber(31, 1);
                break;
            case 11:
                month = ' ноября ';
                day = this.randomIntNumber(30, 1);
                break;
            case 12:
                month = ' декабря ';
                day = this.randomIntNumber(31, 1);
                break;
        };

        return day + month + year + ' г.р.'

        },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.profession = this.randomProfession(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.born = this.randomBorn();
        return this.person;
    }
};
