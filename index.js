import axios from 'axios';

querySelector('#form-register').addEventListener('submit', handleSubmit)

//valor dos input
const user_name = getElementById('name').value;
const address = getElementById('address').value;
const country = getElementById('country').value;
const city = getElementById('city').value;
const zip_code = getElementById('zip_code').value;
const state = getElementById('state').value;
const rg = getElementindexById('rg').value;
const cpf = getElementById('cpf').value;
const tel = getElementById('tel').value;
const birth = getElementById('birth').value;
const city_birth = getElementById('city_birth').value;
const state_birth = getElementById('state_birth').value;
const profession = getElementById('profession').value;
const spouse_name = getElementById('spouse_name').value;
const father_name = getElementById('father_name').value;
const mother_name = getElementById('mother_name').value;
const baptism_date = getElementById('baptism_date').value;
const church_baptism = getElementById('church_baptism').value;
const city_baptism = getElementById('city_baptism').value

//valor dos input radio (Estado Civil)
const married = getElementById('married');
const single = getElementById('single');
const widower = getElementById('widower');
const divorced = getElementById('divorced');

//valor dos input radio (Escolaridade)
const primary = getElementById('primary');
const high_school = getElementById('high_school');
const university_education = getElementById('university_education');

//valor dos input radio (Genero)
const male = getElementById('male');
const female = getElementById('female');

// Função para obter o valor da opção selecionada (Estado Civil)
function getSelectedCivilState() {
    if (married.checked) {
        return married.value;
    } else if (single.checked) {
        return single.value;
    } else if (widower.checked) {
        return widower.value;
    } else if (divorced.checked) {
        return divorced.value;
    } else {
        return null;
    }
}

// Função para obter o valor da opção selecionada (Nivel de escolaridade)
function getSelectedEducation() {
    if (primary.checked) {
        return primary.value;
    } else if (high_school.checked) {
        return high_school.value;
    } else if (university_education.checked) {
        return university_education.value;
    } else {
        return null;
    }
}

// Função para obter o valor da opção selecionada (Genero)
function getSelectedGender() {
    if (male.checked) {
        return male.value;
    } else if (female.checked) {
        return female.value;
    } else {
        return null;
    }
}

//Função para salvar no sheets
const handleSubmit = (event) => {
    event.preventDefault();
    return salvar()
}

function salvar(NOME, ENDEREÇO) {
    axios.post('https://sheetdb.io/api/v1/c9y5k24cowcb8'), {
        "data": {
            "NOME": user_name,
            "ENDEREÇO": address,
            "BAIRRO": country,
            "CIDADE": city,
            "CEP": zip_code,
            "ESTADO": state,
            "DOCUMENTO": rg,
            "CPF": cpf,
            "PROFISSÃO": profession,
            "TEL. CELULAR": tel,
            "GRAU DE INSTRUÇÃO": getSelectedEducation(),
            "SEXO": getSelectedGender,
            "EST. CIVIL": getSelectedCivilState(),
            "DATA DE NASC": birth,
            "CIDADE NASC.": city_birth,
            "UF": state_birth,
            "NOME DO PAI": father_name,
            "NOME DA MÃE": mother_name,
            "CONJUGÊ": spouse_name,
            "DATA BATISMO": baptism_date,
            "CIDADE DE BATISMO": city_baptism,
            "IGREJA QUE BATIZOU": church_baptism,
        }
    }, {
        "auth": {
            "username": "7nh3jqip",
            "password": "hg00z6venryit9edbjkq"
        }
    }
}

//Função para coletar dados do sheets
function coletar(){
    get('https://sheetdb.io/api/v1/c9y5k24cowcb8', {
      "auth": {
        "username": "7nh3jqip",
        "password": "hg00z6venryit9edbjkq"
      }
    })
    .then( response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
}

coletar()

