import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import { ChevronLeft } from 'react-bootstrap-icons';


function LoginForm() {

    const [data, setData] = useState({
        memberEmail: '',
        memberPassword: '',
        userName: '',
        birthOfDate: '',
        profileImage: '',
        password: '',
        confirmPassword: '',
        interests: [],
    });

    const [currentStep, setCurrentStep] = useState(0);

    /* 회원가입 절차의 마지막 */
    const makeRequest = (formData) => {
        console.log("회원가입완료!", formData);
    }

    const navigate = useNavigate();

    const goBackToMain = () => {
        navigate(`/`);
    };

    const handleNextStep = (newData, final = false) => {

        async function test() {
            const response = await axios.get(`/api/v1/login/find-member-email`, {
                params: {
                    memberEmail: newData.memberEmail
                },
            });
            return response.data;
        }

        if (currentStep === 0) {
            test()
                .then((result) => {
                    if (result.success) {
                        setCurrentStep(1);
                    } else {
                        setCurrentStep(2);
                    }
                })
        } else if (currentStep === 1) {
            const params = { memberEmail: newData.memberEmail, memberPassword: newData.memberPassword };
            axios.post(`/api/v1/login`, params)
                .then(response => {
                    if (response.data.success) {
                        console.log(response);
                        alert('Welcome, ' + response.data.data.memberName);
                        goBackToMain();
                        // 쿠키에 토큰 저장

                    } else {
                        alert(response.data.data.message);
                    }
                })
                .catch(error => {
                    alert(error);
                });
        }
        else setCurrentStep(prev => prev + 1);
        
        setData(prev => ({ ...prev, ...newData }));
        
        if (final) {
            makeRequest(newData);
        }

    }

    const handlePrevStep = (newData) => {
        setData(prev => ({ ...prev, ...newData }))
        if (currentStep === 2) {
            setCurrentStep(0);
        } else {
            setCurrentStep(prev => prev - 1);
        }
    };

    const FormTitles = ["로그인 또는 회원가입", "로그인", "회원 기본 정보", "관심사"];

    const steps = [
        <LoginOrSignUp next={handleNextStep} data={data} titles={FormTitles} step={currentStep} />,
        <Login next={handleNextStep} data={data} titles={FormTitles} step={currentStep} />,
        <PersonalInfo next={handleNextStep} prev={handlePrevStep} data={data} titles={FormTitles} step={currentStep} />,
        <Interests prev={handlePrevStep} next={handleNextStep} data={data} titles={FormTitles} step={currentStep} />
    ]

    return (
        <div className="login-form">
            {steps[currentStep]}
        </div>
    );
}

/**
 * 로그인
 */
const loginValidationSchema = yup.object({
    memberPassword: yup.string().required('비밀번호는 필수입니다.')
});


const Login = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    }

    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <h6 className="fw-semibold">{props.titles[props.step]}</h6>
                    <hr />
                    <div className="mx-4">  
                    <p className="fs-5 text-start fw-semibold mt-4">아무나 만나보는 거야, MANNA</p>
                    <div className="form-floating">
                        <Field name="memberPassword" type="password" className="form-control" />
                        <label className="text-start">비밀번호</label>
                    </div>
                        <span className="text-danger float-start fw-semibold mt-1">
                            <ErrorMessage name="memberPassword" />
                        </span>
                    <Button className="w-100 p-2 my-2 manna-button" type="submit">로그인</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

const loginOrSignUpValidationSchema = yup.object({
    memberEmail: yup.string().email('유효하지 않은 이메일 형식입니다😅').required('이메일은 필수입니다')
});

const LoginOrSignUp = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    }


    return (
        <Formik
            validationSchema={loginOrSignUpValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <h6 className="fw-semibold">{props.titles[props.step]}</h6>
                    <hr />
                    <div className="mx-4">  
                    <p className="fs-5 text-start fw-semibold mt-4">아무나 만나보는 거야, MANNA</p>
                    <div className="form-floating">
                        <Field name="memberEmail" className="form-control" placeholder="account@example.com" />
                        <label className="text-start">이메일</label>
                    </div>
                    <span className="text-danger float-start fw-semibold mt-1"><ErrorMessage name="memberEmail" /></span>
                    <Button className="w-100 p-2 my-2 manna-button" type="submit">다음</Button>
                    <div className="hr-sect mb-4">또는</div>
                    <div className="sns-login">
                        <div className="border border-secondary p-2 my-3 rounded-3">
                            <img src="./img/kakao.png" alt="kakao-login" className="sns-logo float-start ms-2" />카카오로 로그인하기
                        </div>
                        <div className="border border-secondary p-2 my-3 rounded-3">
                            <img src="./img/google.png" alt="kakao-login" className="sns-logo float-start ms-2" />구글로 로그인하기
                        </div>
                        <div className="border border-secondary p-2 my-3 rounded-3">
                            <img src="./img/apple.png" alt="kakao-login" className="sns-logo float-start ms-2" />Apple로 로그인하기
                        </div>
                    </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

const PersonalInfoValidationSchema = yup.object({
    userName: yup.string().required('이름은 필수값입니다'),
    birthOfDate: yup.date().required('생년월일은 필수값입니다'),
    profileImage: yup.mixed()
          .test("required", "프로필 사진 업로드는 필수입니다.", (file) => {
            if (file) return true;
            return false;
          }),
    password: yup.string().min(8, '비밀번호는 최소 8자 이상 입력해주세요').required('비밀번호는 필수값입니다'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 확인은 필수입니다.')
});


const PersonalInfo = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };
    
    return (
        <Formik
            validationSchema={PersonalInfoValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <Form>
                    <ChevronLeft className="float-start ms-2" onClick={() => props.prev(values)} />
                    <h6 className="fw-semibold">{props.titles[props.step]}</h6>
                    <hr />
                    <div className="mx-4">
                        <div className="my-4">
                            <Field name="userName" className="form-control mt-3" placeholder="이름을 입력해주세요" />
                            <span className="text-danger float-start fw-semibold"><ErrorMessage name="userName" /></span>
                        </div>
                        <div className="form-floating">
                            <Field name="birthOfDate" className="form-control" type="date" />
                            <label className="text-start">생년월일</label>
                            <span className="text-danger float-start fw-semibold ms-1 my-1"><ErrorMessage name="birthOfDate" /></span>
                        </div>
                        <div className="my-3">
                            <Field name="profileImage" className="form-control" type="file" />
                            <span className="text-danger float-start fw-semibold ms-1 my-1"><ErrorMessage name="profileImage" /></span>
                        </div>
                        <Field name="password" className="form-control" placeholder="비밀번호를 입력해주세요" type="password" />
                        <span className="text-danger float-start fw-semibold ms-1 my-1"><ErrorMessage name="password" /></span>
                        <Field name="confirmPassword" className="form-control" placeholder="비밀번호를 한번 더 입력해주세요" type="password" />
                        <span className="text-danger float-start fw-semibold ms-1 my-1"><ErrorMessage name="confirmPassword" /></span>
                        <Button className="w-100 p-2 my-2 manna-button" type="submit">다음</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

const Interests = (props) => {
    const handleSubmit = (values) => {
        props.next(values, true);
    }
    
    return (
        <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {(values) => (
                <Form>
                    <ChevronLeft className="float-start ms-2" onClick={() => props.prev(values)} />
                    <h6 className="fw-semibold">{props.titles[props.step]}</h6>
                    <hr />
                    <div className="mx-4">
                        <div>카테고리 보여주기</div>
                        <Button className="w-100 p-2 my-2 manna-button" type="submit">회원가입</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}



export default LoginForm;