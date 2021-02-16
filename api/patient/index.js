const patientRepository = require('./repository/patient')
const examRepository = require('./repository/exam')
const medicineRepository = require('./repository/medicine')

const getPatientInfo = async patientId => {
    const patient = await patientRepository.findById(patientId)
    const exams = await examRepository.findAllByPatientId(patientId)
    const medicines = await medicineRepository.findAllByPatientId(patientId)

    return {
        ...patient.dataValues,
        exams: exams.map(exam => ({ 
                name: exam.name,
                result: exam.result,
                date: exam.date.toISOString()
            })
        ),
        medicines: medicines.map(medicine =>({ 
                name: medicine.name,
                date: medicine.date.toISOString()
            })
        ),
    }
}

module.exports = {
    getPatientInfo
}
