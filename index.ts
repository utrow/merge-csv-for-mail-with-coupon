import { fstat, readFile } from "fs"

const FILE_ENCODING = 'utf8'

const main = () => {
    const emailFilename = process.argv.slice(2)[0]
    const couponFilename = process.argv.slice(2)[1]

    readFile(emailFilename, FILE_ENCODING, function (err, csvEmail) {
        if (err) {
            return console.log(err)
        }

        readFile(couponFilename, FILE_ENCODING, function (err, csvCoupon) {
            if (err) {
                return console.log(err)
            }

            const emailList = csvEmail.split('\n').slice(1) // trim header
            const couponList = csvCoupon.split('\n')

            generateCsv(emailList, couponList)
        })
    })
}

const generateCsv = (emailList: string[], couponList: string[]) => {
    
    const headers = ['email', 'nenga_code_2021']
    console.log(headers.join(','))

    emailList.forEach((email, index) => {
        if (email.length === 0) {
            return
        }
        console.log([email, couponList[index]].join(','))
    })
}

main()