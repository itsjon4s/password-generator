import { useState } from "react"
import { generatePassword } from "../functions/generatePasssword"

export default function Generator() {
    const [len, setLen] = useState<string>('0')
    const [result, setResult] = useState<string>('Insert the Password length bellow')

    function getResults() {
        const passwordLength = Number(len)
        if (passwordLength > 30 || passwordLength < 5) {
            return setResult("The password length must be bettween 5 and 30")
        }

        const password = generatePassword(passwordLength)
        setResult(password)
    }

    return (
        <div className="bg-[#ccc] h- w-96 m-5 rounded-lg text-slate-950 p-5 font-medium">
            <div className="max-w px-2 py-10 my-5 rounded-lg bg-[#181818] text-[#fff] overflow-hidden">
                {result}
            </div>

            <div className="flex justify-between">
                <input className="b-2 rounded-lg appearance-none p-2"
                type="number" value={len} onChange={((c) => {
                    const val = c.target.value
                    if(val.includes('-')) return

                    setLen(c.target.value)
                })}
                placeholder="Password Length"
                />
                <button onClick={() => getResults()} className="p-4 rounded-lg bg-[#181818] text-[#fff]">Generate</button>
            </div>
        </div>
    )
}