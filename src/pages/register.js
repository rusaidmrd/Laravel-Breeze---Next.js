import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ name, email, password, password_confirmation, setErrors })
    }

    return (
        <div className="bg-gray-color">
            <div className=" bg-white py-3 w-full">
                <div className="flex container mx-auto">
                    <div>
                        <h4 className="font-semibold text-lg">Register here</h4>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-14">
                <div className="p-10 bg-white rounded-md shadow-md w-110 mx-auto">
                    {/* Validation Errors */}
                    <AuthValidationErrors className="mb-4" errors={errors} />

                    <form onSubmit={submitForm}>
                        {/* Name */}
                        <div>
                            <Label htmlFor="name">Name</Label>

                            <Input
                                id="name"
                                type="text"
                                value={name}
                                className="block mt-1 w-full"
                                onChange={event => setName(event.target.value)}
                                required
                                autoFocus
                            />
                        </div>

                        {/* Email Address */}
                        <div className="mt-4">
                            <Label htmlFor="email">Email</Label>

                            <Input
                                id="email"
                                type="email"
                                value={email}
                                className="block mt-1 w-full"
                                onChange={event => setEmail(event.target.value)}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mt-4">
                            <Label htmlFor="password">Password</Label>

                            <Input
                                id="password"
                                type="password"
                                value={password}
                                className="block mt-1 w-full"
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                required
                                autoComplete="new-password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mt-4">
                            <Label htmlFor="password_confirmation">
                                Confirm Password
                            </Label>

                            <Input
                                id="password_confirmation"
                                type="password"
                                value={password_confirmation}
                                className="block mt-1 w-full"
                                onChange={event =>
                                    setPasswordConfirmation(event.target.value)
                                }
                                required
                            />
                        </div>

                        <div className="flex items-center justify-start mt-4">
                            <Button className="mr-4">Register</Button>
                            <Link href="/login">
                                <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                    Already registered?
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
