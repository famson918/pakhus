<template>
    	<div class="d-flex flex-column flex-root mt-12">
			<!--begin::Authentication - Sign-up -->
			<div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed background-image" style="">
				<!--begin::Content-->
				<div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					<!--begin::Logo-->
					<!-- <a href="../../demo1/dist/index.html" class="mb-12">
						<img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-40px" />
					</a> -->
					<!--end::Logo-->
					<!--begin::Wrapper-->
					<div class="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						<!--begin::Form-->
						<form @submit.prevent="submitRegister" class="form w-100" novalidate="novalidate" id="kt_sign_up_form">
							<!--begin::Heading-->
							<div class="mb-10 text-center">
								<!--begin::Title-->
								<h1 class="text-dark mb-3">{{$t('createAnAccount')}}</h1>
								<!--end::Title-->
								<!--begin::Link-->
								<div class="text-gray-400 fw-bold fs-4">{{$t('alreadyAccount')}}
								    <router-link to="/login"  class="link-primary fw-bolder">{{ $t('signHere') }}</router-link>
                                </div>
								<!--end::Link-->
							</div>
							<!--end::Heading-->
							<!--begin::Action-->
							<!-- <button type="button" class="btn btn-light-primary fw-bolder w-100 mb-10">
							<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" class="h-20px me-3" />Sign in with Google</button> -->
							<!--end::Action-->
							<!--begin::Separator-->
							<!-- <div class="d-flex align-items-center mb-10">
								<div class="border-bottom border-gray-300 mw-50 w-100"></div>
								<span class="fw-bold text-gray-400 fs-7 mx-2">OR</span>
								<div class="border-bottom border-gray-300 mw-50 w-100"></div>
							</div> -->
							<!--end::Separator-->
							<!--begin::Input group-->
							<!-- <div class="row fv-row mb-7"> -->
								<!--begin::Col-->
                                <!-- <label class="form-label fw-bolder text-dark fs-6">{{ $t('postCode') }}</label> -->
                                <!-- <input v-model="registerForm.postCode" class="form-control form-control-lg form-control-solid" type="text" placeholder="" name="first-name" autocomplete="off" /> -->
								<!--end::Col-->
							<!-- </div> -->
							<div class="row fv-row mb-7">
                                <label class="form-label fw-bolder text-dark fs-6">{{ $t('name') }}</label>
                                <input v-model="registerForm.name" class="form-control form-control-lg form-control-solid" type="text" placeholder="" name="last-name" autocomplete="off" />
							</div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.name">
                                    {{ message }}
                                </div>
                            </div>
							<!--begin::Input group-->
							<div class="fv-row mb-7">
								<label class="form-label fw-bolder text-dark fs-6">{{ $t('email') }}</label>
								<input v-model="registerForm.email" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
							</div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.email">
                                    {{ message }}
                                </div>
                            </div>
							<!--end::Input group-->
							<!--begin::Input group-->
							<div class="mb-10 fv-row" data-kt-password-meter="true">
								<!--begin::Wrapper-->
								<div class="mb-1">
									<!--begin::Label-->
									<label class="form-label fw-bolder text-dark fs-6">{{ $t('password') }}</label>
									<!--end::Label-->
									<!--begin::Input wrapper-->
									<div class="position-relative mb-3">
										<input v-model="registerForm.password"  class="form-control form-control-lg form-control-solid" :type="password" placeholder="" name="password" autocomplete="off" />
										<span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
											<i v-on:click="showPassword"  :class="[passwordVisible ? 'bi bi-eye-slash' : 'bi bi-eye', 'fs-2']"></i>
											<i  class="bi bi-eye fs-2 d-none"></i>
										</span>
									</div>
									<!--end::Input wrapper-->
									<!--begin::Meter-->
									<!-- <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
										<div class="flex-grow-1 bg-active-success rounded h-5px me-2" :class="[passwordStrength > 1 ? 'bg-primary': 'bg-secondary']"></div>
										<div class="flex-grow-1 bg-active-success rounded h-5px me-2" :class="[passwordStrength > 2 ? 'bg-primary': 'bg-secondary']"></div>
										<div class="flex-grow-1  bg-active-success rounded h-5px me-2" :class="[passwordStrength > 3 ? 'bg-primary': 'bg-secondary']"></div>
										<div class="flex-grow-1  bg-active-success rounded h-5px" :class="[passwordStrength >= 4 ? 'bg-primary': 'bg-secondary']"></div>
									</div> -->
									<!--end::Meter-->
								</div>
								<!--end::Wrapper-->
								<!--begin::Hint-->
								<div class="text-muted">{{$t('passwordRule')}}</div>
								<!--end::Hint-->
							</div>
							<!--end::Input group=-->
							<!--begin::Input group-->
							<div class="fv-row mb-5">
								<label class="form-label fw-bolder text-dark fs-6">{{ $t('confirm_password') }}</label>
								<input v-model="registerForm.password_confirmation"  class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirm-password" autocomplete="off" />
							</div>
							<!--end::Input group-->
                            <!--begin::Input group-->
							<div class="fv-row mb-7">
								<label class="form-label fw-bolder text-dark fs-6">{{ $t('cellPhone') }}</label>
								<input v-model="registerForm.cellPhone" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
							</div>
                            <div class="fv-row mb-7">
                                <label class="form-label fw-bolder text-dark fs-6">{{ $t('companyName') }}</label>
                                <input v-model="registerForm.companyName" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
                            </div>
                            <div class="fv-row mb-7">
                                <label class="form-check form-check-custom form-check-solid form-check-inline" for="flexCheckIndeterminate">
                                <input class="form-check-input" type="checkbox" name="individual"  v-model="registerForm.individual" id="flexCheckIndeterminate">
                                    <span class="form-check-label fw-bold text-gray-700 fs-6">{{ $t('individual') }}</span>
                                </label>
                            </div>
							<div class="fv-row mb-7">
								<label class="form-label fw-bolder text-dark fs-6">{{ $t('position') }}</label>
								<input v-model="registerForm.position" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
							</div>
							<!--end::Input group-->
							<!--begin::Input group-->
							<div class="fv-row mb-10">
								<label class="form-check form-check-custom form-check-solid form-check-inline">
									<input v-model="registerForm.terms" class="form-check-input" type="checkbox" name="toc" value="1" />
									<span class="form-check-label fw-bold text-gray-700 fs-6">{{$t('iAgree')}}
									<a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="ms-1 link-primary">{{ $t('terms') }}</a></span>
								</label>
							</div>
							<!--begin::Actions-->
							<div class="text-center">
								<button type="submit" id="kt_sign_up_submit" :class="{ 'opacity-25': processing }" :disabled="processing" class="btn btn-lg btn-primary">
									<span class="indicator-label">{{ $t('register') }}</span>
									<!-- <span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span> -->
								</button>
							</div>
							<!--end::Actions-->
							<!--end::Input group-->
						</form>
						<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ $t('terms') }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div v-if="locale === 'kr'" class="modal-body">
                        <p>
                            <span style="background-color:#f2f2f2">제1조 총칙</span>
                            <br />
                            <span style="background-color:#f2f2f2">파쿠스(이하 '회사'라고 함)는 ‘개인정보처리방침’을 제정하고 이를 준수하여 회원의 개인정보의 이용 및 보호에 대한 조치를 알리며, 관련법규를 준수합니다.</span>
                            <br />
                            <span style="background-color:#f2f2f2">회원은 개인정보의 수집, 이용, 제공, 위탁 등과 관련한 아래 사항에 대하여 원하지 않는 경우 동의를 거부할 수 있으며, 이용자가 동의를 거부하는 경우 서비스의 전부 또는 일부를 이용할 수 없습니다.</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">제2조 개인정보의 수집목적 및 이용목적</span>
                            <br />
                            <span style="background-color:#f2f2f2">
                                1. 회사는 이용자의 사전 동의 없이는 이용자의 개인 정보를 공개하지 않으며, 다음과 같은 목적을 위하여 개인정보를 수집하고 이용합니다.
                            </span>
                            <br />
                            <span style="background-color:#f2f2f2">가. 서비스 제공</span>
                            <br />
                            <span style="background-color:#f2f2f2">견적서·요청서 정보 제공 및 프로필 광고노출, 멤버십 등 기본적인 서비스 제공, 서비스 제공에 관한 계약 체결·유지·이행·관리·개선 및 서비스 제공에 따른 요금 정산 및 컨텐츠 서비스 이용, 구매 및 요금결제, 물품 배송 또는 청구지 등 발송, 클라이언트 컨설팅 및 서비스 이용 정보 제공</span>
                            <br />
                            <span style="background-color:#f2f2f2">나. 회원관리</span>
                            <br />
                            <span style="background-color:#f2f2f2">회원제 서비스에 따른 본인 확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 회원 가입∙유지∙탈퇴 의사 확인, 연령확인, 만 14세 미만 아동 개인정보수집 시 법정 대리인 동의 여부 확인, 법정 대리인 권리행사 시 본인 확인, 법령상 의무 이행, 법령 및 약관 위반 여부에 관한 조사, 고객 센터 운영 불만처리 등 민원 처리, 고지사항 전달 등</span>
                            <br />
                            <span style="background-color:#f2f2f2">다. 마케팅 및 광고에 활용</span>
                            <br />
                            <span style="background-color:#f2f2f2">신규 서비스(제품) 개발 및 특화, 뉴스레터, 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 마케팅 및 광고 등에 활용, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 수집하는 개인정보 항목에 따른 이용 목적은 다음과 같습니다.</span>
                            <br />
                            <span style="background-color:#f2f2f2">가. 성명, 아이디, 비밀번호: 회원제 서비스 이용에 따른 본인 확인, 회원 가입·유지·탈퇴</span>
                            <br />
                            <span style="background-color:#f2f2f2">나. 이메일주소, 전화번호: 고지사항 전달, 불만처리 등을 위한 원활한 의사소통 경로의 확보, 새로운 서비스 및 신상품이나 이벤트 정보 등의 안내</span>
                            <br />
                            <span style="background-color:#f2f2f2">다. 신용카드정보(카드사 이름, 카드 번호 16자리, 카드 유효기간, 카드 명의자 생년월일): 서비스 및 부가 서비스 이용에 대한 요금 결제</span>
                            <br />
                            <span style="background-color:#f2f2f2">라. 고객센터 이용고객과의 통화 녹음: 회사 내 고객센터 및 기본 서비스 개선</span>
                            <br />
                            <span style="background-color:#f2f2f2">마. 이메일, 전화번호 및 기타 선택 항목: 개인맞춤 서비스를 제공하기 위한 자료, 마케팅 활동</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">제3조 개인정보 수집 항목</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 회사는 이용자들이 회원서비스를 이용하기 위해 회원으로 가입할 때 서비스 제공을 위하여 아래와 같은 개인정보를 필수적으로 수집합니다.</span>
                            <br />
                            <span style="background-color:#f2f2f2">가. 필수 항목:</span>
                            <br />
                            <span style="background-color:#f2f2f2">이용자의 성명, 아이디, 비밀번호, 이메일 주소, 휴대전화번호, 법정대리인정보(14세미만의 경우), 은행계좌정보, 서비스 이용기록, 접속 로그기록, 결제기록, 쿠키, IP Address, 불량 이용 기록, 고객센터 이용 시 고객센터 통화 내용</span>
                            <br />
                            <span style="background-color:#f2f2f2">나. 선택 항목:</span>
                            <br />
                            <span style="background-color:#f2f2f2">마케팅·이벤트 정보제공을 위하여 수집한 추가 개인정보</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 회사는 설문조사나 이벤트 행사 시 통계분석이나 경품제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있습니다. 회사가 발송하는 뉴스레터 내의 광고 메일 수신에 동의하셔서, 메일 수신과 함께 이벤트, 경품 등의 혜택을 받는 광고 메일 수신자가 되는 경우에도 선별적으로 개인정보 입력을 요청받을 수 있습니다.</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. 회사는 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할 것입니다.</span>
                            <br />
                            <span style="background-color:#f2f2f2">4. 회사는 이용자 및 회원 간 거래에서 분쟁을 예방하기 위하여 이용자에게 실명인증을 요구할 수 있습니다.</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">제4조 개인정보의 수집 방법</span>
                            <br />
                            <span style="background-color:#f2f2f2">회사는 다음의 방법으로 개인정보를 수집합니다.</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 회사가 제공하는 플랫폼, 서면 양식, 전화/팩스 등 서비스 가입이나 사용 중 회원의 자발적 제공을 통한 수집</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 생성 정보 수집 툴을 통한 수집</span><br />&#xa0;
                        </p>

                            <p>
                                <span style="background-color:#f2f2f2">제5조 수집하는 개인정보의 보유 및 이용기간</span>
                                <br />
                                <span style="background-color:#f2f2f2">1. 법령에서 별도로 정하거나 귀하와 별도 합의하는 등의 특별한 사정이 없는 한 이용자가 파쿠스 회원으로서 회사에 제공하는 서비스를 이용하는 동안 또는 제1조에서 정한 목적을 달성할 때까지 회사는 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">2. 이용자의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을 원칙으로 합니다. 다만, 회사는 서비스 혼선 방지, 수사기관에 대한 협조, 불량 회원의 부정한 이용의 재발 및 재가입을 방지하고 분쟁 해결을 위하여 이용계약 해지일로부터 6개월간 해당 회원의 이름, 아이디, 연락처, 부정이용 내역(서비스 이용기록, 접속로그, 쿠키, 접속IP정보)을 보관합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">3. 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">• 표시. 광고에 관한 기록: 6월 (전자상거래등에서의 소비자보호에 관한 법률)</span>
                                <br />
                                <span style="background-color:#f2f2f2">• 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</span>
                                <br />
                                <span style="background-color:#f2f2f2">• 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</span>
                                <br />
                                <span style="background-color:#f2f2f2">• 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)</span>
                                <br />
                                <br />
                                <span style="background-color:#f2f2f2">제6조 개인정보 제3자 제공</span>
                                <br />
                                <span style="background-color:#f2f2f2">회사는 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">그 밖에 개인정보의 제3자 제공이 필요한 경우에는 합당한 절차를 통한 동의를 얻어 제공합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">1. 개인정보 제3자 제공 현황</span>
                                <br />
                                <span style="background-color:#f2f2f2">1) 국세청 고시에 따른 주류 통신판매 주문에 대한 분기별 명세 세무서 제공</span>
                                <br />
                                <span style="background-color:#f2f2f2">제공받는 자 : 관할 세무서</span>
                                <br />
                                <span style="background-color:#f2f2f2">제공 항목 : [판매자 정보] 판매자 인적사항(상호, 사업자등록번호 등), [구매자 정보] 구매자 인적사항(주소, 성명, 생년월일), [주문 정보] 주문일자, 상품명, 수량, 주문금액 재화 또는 서비스의 제공 목적 달성 후 파기 (단, 관계법령에 정해진 규정에 따라 법정기간 동안 보관)</span>
                                <br />
                                <br />
                                <span style="background-color:#f2f2f2">제7조 개인정보의 위탁처리</span>
                                <br />
                                <span style="background-color:#f2f2f2">회사는 서비스 향상을 위해서 이용자의 개인정보를 서비스 제공을 위해서 반드시 필요한 업무 중 일부의 수행을 위하여 본 조 제2항과 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다. 또한 공유하는 정보는 당해 목적을 달성하기 위하여 필요한 최소한의 정보에 국한됩니다.</span>
                                <br />
                                <br />
                                <span style="background-color:#f2f2f2">제8조 개인정보 파기절차 및 방법</span>
                                <br />
                                <span style="background-color:#f2f2f2">1. 이용자가 파쿠스 웹사이트를 통해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(출력물의 경우 별도의 서류함) 내부 방침 및 기타 관계법령에 의한 정보보호 사유에 따라 (보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">2. 회사는 제8조에서 설명한 절차와 방법에 따라 이용자 본인이 직접 정보 수정·삭제를 요청하거나 가입해지를 요청한 경우에도 본 조에서 정한 바와 같이 파기 처리합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">3. 제3조에서와 같이 일시적인 목적 (설문조사, 이벤트, 본인확인 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 파기 처리됩니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">4. 회사는 귀중한 이용자의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">1. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">2. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</span>
                                <br />
                                <br />
                                <span style="background-color:#f2f2f2">제9조 이용자의 권리</span>
                                <br />
                                <span style="background-color:#f2f2f2">1. 회원은 회사에 대해 언제든지 다음과 각 호와 같은 권리를 행사할 수 있습니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">0. 개인정보 열람 요구</span>
                                <br />
                                <span style="background-color:#f2f2f2">가. 오류 등이 있을 경우 정정 요구</span>
                                <br />
                                <span style="background-color:#f2f2f2">나. 삭제 요구</span>
                                <br />
                                <span style="background-color:#f2f2f2">다. 처리 정지 요구</span>
                                <br />
                                <span style="background-color:#f2f2f2">2. 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 할 수 있으며 회사는 본인 확인을 위한 요청인의 신분증 사본 등의 증표를 제시 받아 해당 요구가 진정한 본인의 의사인지 여부를 확인할 수 있으며, 본인으로 확인되고 개인정보에 오류가 있거나 보존기간을 경과한 것이 판명되는 등 정정 또는 삭제할 필요가 있다고 인정되는 경우 지체 없이 그에 따른 조치를 취합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">3. 회원이 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다. 제1항에 따른 권리 행사는 회원의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출해야 합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">4. 회사는 서비스의 원할한 공급과 아동의 개인정보를 보호를 위하여, 만 14세 미만의 아동의 경우 신규회원 가입을 제한하고 있습니다.</span>
                                <br /><br />
                                <span style="background-color:#f2f2f2">제 10조 (개인정보 자동 수집 장치의 설치운영)</span>
                                <br />
                                <span style="background-color:#f2f2f2">1. 회사는 회원인증을 위하여 Cookie 방식을 이용합니다. 이는 로그아웃(Logout)시 자동으로 컴퓨터에 저장되지 않고 삭제되도록 되어 있으므로 공공장소나 타인이 사용할 수 있는 컴퓨터를 사용 할 경우에는 로그인(Login)후 서비스 이용이 끝나면 반드시 로그아웃(Logout)해야 합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">2. 쿠키 설정 거부를 위하여 이용자는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</span>
                                <br /><span style="background-color:#f2f2f2">3. 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</span><br />&#xa0;
                            </p>
                            <p>
                                <span style="background-color:#f2f2f2">제11조 개인정보 보호조치 절차</span>
                                <br />
                                <span style="background-color:#f2f2f2">1. 회사는 이용자의 개인정보를 처리함에 있어 정보의 분실, 도난, 누출, 외부로부터의 공격, 해킹 등을 방지하고 안전성을 확보하기 위하여 기술적·관리적 및 물리적 조치를 하고 있습니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">2. 회사가 수행하는 기술적∙관리적 및 물리적 조치는 다음과 같습니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">가. 개인정보의 안전한 처리를 위하여 별도의 내부 관리계획을 수립·시행합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">나. 개인정보에 대한 접근 통제 및 접근 권한을 제한하기 위하여 이용자의 개인정보를 처리하는 담당인원을 최소한으로 제한하며, 관련 직원에 대해서는 지속적인 보안교육의 실시와 함께 본 정책의 준수여부를 수시로 점검합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">다. 개인정보를 안전하게 저장·전송할 수 있도록 이용자의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화하여 중요한 데이터는 별도의 보안기능을 통해 보호하며, 암호화통신(SSL)등을 통하여 네트워크상에서 개인정보 안전전송에 최선을 다합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">라. 개인정보 침해사고 발생에 대응하기 위한 접속기록의 보관 및 위조·변조 방지를 위하여 개인정보취급자가 개인정보처리시스템에 접속하여 개인정보를 처리한 경우 접속일시, 처리내역 등을 저장하고 위·변조 또는 도난, 분실, 파기되지 않도록 별도로 보관합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">마. 회사는 컴퓨터 바이러스에 의한 개인정보 피해가 발생하지 않도록 백신프로그램을 이용하고 있으며, 주기적으로 업데이트를 진행하는 등 개인정보에 대한 보안프로그램을 설치 및 갱신하고 있습니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">바. 개인정보의 안전한 보관을 위하여 외부침입을 차단하는 보안장치를 이용하고 있으며, 침입탐지시스템을 설치하여 불법적인 침입을 감시하는 등 별도의 보관시설의 마련 또는 잠금장치의 설치 등 물리적 조치를 취하고 있습니다.</span>
                                <br />
                                <br />
                                <span style="background-color:#f2f2f2">제12조 개인정보 보호책임자</span>
                                <br />
                                <span style="background-color:#f2f2f2">1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">성 명 이우종</span>
                                <br />
                                <span style="background-color:#f2f2f2">직 위 CEO</span>
                                <br />
                                <span style="background-color:#f2f2f2">2. 기술적인 보완조치를 했음에도 불구하고, 해킹 등 기본적인 네트워크상의 위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의 훼손 및 방문자가 작성한 게시물에 의한 각종 분쟁에 관해서는 책임이 없습니다.</span>
                                <br />
                                <br />
                                <span style="background-color:#f2f2f2">제13조 권익침해구제/불만접수</span>
                                <br />
                                <span style="background-color:#f2f2f2">회사는 개인정보보호와 관련하여 이용자들의 의견을 수렴하고 있습니다. 이용자들은 고객센터로 전화나 메일을 통해 불만사항을 신고할 수 있습니다. 회사는 신고사항에 대하여 신속하고 충분한 답변의 책임을 집니다.</span>
                            </p>
                            <p>
                                <br /><span style="background-color:#f2f2f2">제 14조 (개인정보 처리방침 관련 고지 및 통지)</span>
                                <br />
                                <span style="background-color:#f2f2f2">본 방침은 정부나 회사의 정책이 변경됨에 따라 내용의 추가 및 삭제, 수정이 있을 수 있으며, 이 경우 시행 7일 전에 홈페이지 또는 이메일 등을 통해 사전 공지하고 사전 공지가 곤란한 경우 지체 없이 공지합니다.</span>
                                <br />
                                <span style="background-color:#f2f2f2">또한 당사는 개인정보의 수집 및 활용, 제3자 제공 등 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령에 따라 고객의 별도 동의가 필요한 사항과 관련된 내용이 추가, 변경되는 경우에는 관련 법령에 따른 고객의 별도 동의를 받습니다.</span><br /><span style="background-color:#f2f2f2">본 방침은 공지한 날로부터 시행됩니다.</span><br />
                            </p>
                            <p style="margin-top:10px; text-align:center;">   
                                <span style="background-color:#f2f2f2">최종 수정 기준일 : 2024년 2월 15일</span>
                        </p>
                    </div>
                    <div v-if="locale === 'en'" class="modal-body">
                        <p>
                            <span style="background-color:#f2f2f2">Article 1 General Provisions</span>
                            <br />
                            <span style="background-color:#f2f2f2">Pakus (hereinafter referred to as the "Company") establishes and complies with the 'Privacy Policy,' informing measures for the use and protection of members' personal information in accordance with related regulations.</span>
                            <br />
                            <span style="background-color:#f2f2f2">Members may refuse consent for the following matters related to the collection, use, provision, and delegation of personal information if they do not wish to agree, and if the user refuses consent, they may not use all or part of the service.</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 2 Collection and Use Purposes of Personal Information</span>
                            <br />
                            <span style="background-color:#f2f2f2">
                                1. The Company does not disclose users' personal information without prior consent and collects and uses personal information for the following purposes.
                            </span>
                            <br />
                            <span style="background-color:#f2f2f2">a. Service Provision</span>
                            <br />
                            <span style="background-color:#f2f2f2">Providing quotation/request information, profile advertisement exposure, basic service provision such as membership, entering into, maintaining, executing, managing, improving contracts related to service provision, settlement of fees related to service provision, content service use, purchase and fee payment, sending goods or invoices, client consulting, and service use information provision</span>
                            <br />
                            <span style="background-color:#f2f2f2">b. Member Management</span>
                            <br />
                            <span style="background-color:#f2f2f2">Self-verification according to member service, personal identification, prevention of misuse by malicious members and unauthorized use, confirmation of membership registration/maintenance/withdrawal intentions, age verification, confirmation of legal guardian's consent for collecting personal information of children under 14, self-verification when exercising legal guardian rights, legal compliance, investigation of violations of laws and terms, complaint handling, notification delivery, etc. by customer center operation</span>
                            <br />
                            <span style="background-color:#f2f2f2">c. Marketing and Advertising Utilization</span>
                            <br />
                            <span style="background-color:#f2f2f2">Development and specialization of new services (products), newsletter, event advertising information delivery, service provision and advertising publication according to demographic characteristics, utilization for marketing and advertising, statistics on access frequency or member service use</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. The purposes of use according to the personal information items collected are as follows.</span>
                            <br />
                            <span style="background-color:#f2f2f2">a. Name, ID, Password: Self-verification for member service use, membership registration/maintenance/withdrawal</span>
                            <br />
                            <span style="background-color:#f2f2f2">b. Email address, phone number: Ensuring smooth communication channels for notification delivery, complaint handling, etc., and providing information on new services, new products, events, etc.</span>
                            <br />
                            <span style="background-color:#f2f2f2">c. Credit card information (card company name, 16-digit card number, card expiration date, cardholder's date of birth): Payment for service and additional service use</span>
                            <br />
                            <span style="background-color:#f2f2f2">d. Recording of customer center conversations: Improvement of customer center and basic services within the company</span>
                            <br />
                            <span style="background-color:#f2f2f2">e. Email, phone number, and other optional items: Data for providing personalized services, marketing activities</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 3 Personal Information Collection Items</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. The Company collects the following personal information as mandatory to provide services when users sign up as members to use member services.</span>
                            <br />
                            <span style="background-color:#f2f2f2">a. Mandatory items:</span>
                            <br />
                            <span style="background-color:#f2f2f2">Name, ID, Password, Email address, mobile phone number, legal guardian information (for those under 14 years old), bank account information, service usage records, access log records, payment records, cookies, IP Address, records of malicious use, contents of customer center conversations when using the customer center</span>
                            <br />
                            <span style="background-color:#f2f2f2">b. Optional items:</span>
                            <br />
                            <span style="background-color:#f2f2f2">Additional personal information collected for providing marketing/event information</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. The Company may selectively request input of personal information for statistical analysis, prize giveaways, etc., during surveys or events. If users agree to receive advertising emails within the newsletters sent by the Company, becoming recipients of advertising emails along with benefits such as events, prizes, etc., the Company may selectively request input of personal information.</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. The Company does not collect sensitive personal information (race and ethnicity, beliefs and religions, birthplace and domicile, political inclinations and criminal records, health conditions and sexual activities, etc.) that may infringe on users' basic rights. If it becomes necessary to collect such information, the Company will obtain users' prior consent.</span>
                            <br />
                            <span style="background-color:#f2f2f2">4. To prevent disputes in transactions between users and members, the Company may request real-name verification from users.</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 4 Methods of Collecting Personal Information</span>
                            <br />
                            <span style="background-color:#f2f2f2">The Company collects personal information through the following methods.</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. Collection through voluntary provision by members during service sign-up or use via platforms provided by the Company, written forms, phone/fax, etc.</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. Collection through information collection tools</span>
                            <br />&#xa0;
                        </p>

                        <p>
                            <span style="background-color:#f2f2f2">Article 5 Retention and Use Period of Collected Personal Information</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. Unless otherwise specified by law or agreed upon separately with you, the Company will continuously retain and use the personal information of users as long as users utilize the services provided by the Company as Pakus members or until the purposes set forth in Article 1 are achieved for service provision, etc.</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. The personal information of users is generally disposed of when the purposes of collecting or providing personal information are achieved. However, the Company retains the name, ID, contact information, and misuse history (service usage records, access logs, cookies, IP information) of the member for six months from the termination of the service contract to prevent service confusion, cooperate with investigative agencies, prevent the recurrence of misuse by malicious members and re-registration, and resolve disputes.</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. In cases where it is necessary to preserve member information in accordance with relevant laws and regulations such as the Commercial Act and the Act on Consumer Protection in Electronic Commerce Transactions, the Company retains member information for a certain period specified by the relevant laws and regulations. The Company uses the preserved information only for the purpose of preservation, and the retention periods are as follows:</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Records related to advertising: 6 months (Act on Consumer Protection in Electronic Commerce Transactions)</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Records related to contracts or subscription withdrawals: 5 years (Act on Consumer Protection in Electronic Commerce Transactions)</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Records related to payment and supply of goods: 5 years (Act on Consumer Protection in Electronic Commerce Transactions)</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Records related to consumer complaints or dispute resolution: 3 years (Act on Consumer Protection in Electronic Commerce Transactions)</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 6 Provision of Personal Information to Third Parties</span>
                            <br />
                            <span style="background-color:#f2f2f2">The Company provides personal information to third parties only with the consent of the data subject, special provisions of the law, or when it falls under Article 17 and Article 18 of the Personal Information Protection Act.</span>
                            <br />
                            <span style="background-color:#f2f2f2">In cases where the provision of personal information to third parties is necessary, the Company obtains consent through appropriate procedures.</span>
                            <br />
                            <span style="background-color:#f2f2f2">The Company provides personal information to third parties as follows:</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Status of Providing Personal Information to Third Parties</span>
                            <br />
                            <span style="background-color:#f2f2f2">1) Quarterly detailed tax office provision for liquor online sales orders according to NTS notification</span>
                            <br />
                            <span style="background-color:#f2f2f2">Recipient: Relevant tax office</span>
                            <br />
                            <span style="background-color:#f2f2f2">Items provided: [Seller Information] Seller personal information (business name, business registration number, etc.), [Buyer Information] Buyer personal information (address, name, date of birth), [Order Information] Order date, product name, quantity, order amount Purpose of providing goods or services: Destruction after achieving the purpose (However, stored for the statutory period as required by relevant laws and regulations)</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 7 Outsourcing of Personal Information Processing</span>
                            <br />
                            <span style="background-color:#f2f2f2">To enhance services, the Company outsources some necessary tasks for service provision by entrusting personal information as specified in paragraph 2 of this Article. The Company establishes necessary matters to ensure that personal information is securely managed in the event of an outsourcing contract in accordance with relevant laws and regulations. The shared information is limited to the minimum necessary information for achieving the purpose.</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 8 Procedure and Method of Personal Information Disposal</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. Information entered by users through the Pakus website is transferred to a separate DB (or a separate document in the case of printed materials) after the purpose is achieved and stored for a certain period according to internal policy and other relevant laws and regulations before being destroyed.</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. The Company processes information deletion or modification requests directly from users or requests for withdrawal of membership according to the procedures and methods described.</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. Personal information temporarily collected for purposes such as surveys, events, or identity verification is destroyed by the same method after the purpose is achieved.</span>
                            <br />
                            <span style="background-color:#f2f2f2">4. The Company securely handles valuable user personal information and destroys personal information through the following methods to prevent leakage:</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Personal information printed on paper is shredded or incinerated.</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Personal information stored in electronic file format is deleted using technical methods that render the records unrecoverable.</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 9 User Rights</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. Members may exercise the following rights against the Company at any time:</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Request to access personal information</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Request for correction in case of errors</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Request for deletion</span>
                            <br />
                            <span style="background-color:#f2f2f2">- Request for processing suspension</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. The exercise of rights shall be made in writing, by electronic mail, facsimile transmission (FAX), etc., to the Company according to the format of the Enforcement Rules of the Personal Information Protection Act. The Company may request proof for identity verification and promptly take necessary actions in case of errors or the need for correction or deletion.</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. If a member requests correction or deletion of personal information, the Company will not use or provide the information until the correction or deletion is completed. The exercise of rights can also be done through a legal guardian or a representative.</span>
                            <br />
                            <span style="background-color:#f2f2f2">4. To ensure smooth service supply and protect children's personal information, the Company restricts new membership registration for children under 14 years of age.</span>
                            <br /><br />
                            <span style="background-color:#f2f2f2">Article 10 (Installation and Operation of Personal Information Automatic Collection Devices)</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. The Company uses Cookie methods for member authentication. This is designed to be automatically deleted upon logout, so when using a computer in a public place or that can be used by others, it is essential to log out after service usage is complete following login.</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. To reject cookie settings, users can select options in the web browser to allow all cookies, require confirmation for each cookie storage, or refuse all cookie storage.</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. Refusing cookie installation may cause difficulties in service provision.</span>
                            <br />&#xa0;
                        </p>

                        <p>
                            <span style="background-color:#f2f2f2">Article 11 Personal Information Protection Measures Procedure</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. The company takes technical, managerial, and physical measures to prevent information loss, theft, leakage, external attacks, hacking, etc., and to ensure security in handling user's personal information.</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. The technical, managerial, and physical measures implemented by the company are as follows:</span>
                            <br />
                            <span style="background-color:#f2f2f2">a. A separate internal management plan is established and implemented for the safe handling of personal information.</span>
                            <br />
                            <span style="background-color:#f2f2f2">b. Access to and authorization of personal information are restricted by limiting the personnel handling user's personal information to a minimum, and regular security education is conducted for relevant employees to ensure compliance with this policy.</span>
                            <br />
                            <span style="background-color:#f2f2f2">c. User's personal information is securely stored and transmitted by password protection, encryption of files and transmission data, and using additional security features to protect important data. Best efforts are made for secure transmission of personal information over the network through encryption communication (SSL), etc.</span>
                            <br />
                            <span style="background-color:#f2f2f2">d. To respond to personal information breaches, access records are kept to prevent forgery and alteration. When personal information handlers access the personal information processing system, access date and time, processing details, etc., are stored to prevent tampering, theft, loss, or destruction.</span>
                            <br />
                            <span style="background-color:#f2f2f2">e. The company utilizes antivirus programs to prevent personal information damage caused by computer viruses, regularly updates security programs, and installs and updates security programs for personal information security.</span>
                            <br />
                            <span style="background-color:#f2f2f2">f. To ensure the safe storage of personal information, security devices are used to block external intrusions, intrusion detection systems are installed to monitor illegal intrusions, and physical measures such as setting up separate storage facilities or installing locking devices are taken.</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 12 Personal Information Protection Manager</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. The company takes overall responsibility for personal information processing and designates a personal information protection manager to handle complaints and damages related to personal information processing.</span>
                            <br />
                            <span style="background-color:#f2f2f2">Name: Lee Woojong</span>
                            <br />
                            <span style="background-color:#f2f2f2">Position: CEO</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. Despite implementing technical improvements, the company is not responsible for damages to information or various disputes arising from unforeseen incidents caused by basic network risks such as hacking.</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">Article 13 Resolution of Rights Infringement/Complaints Reception</span>
                            <br />
                            <span style="background-color:#f2f2f2">The company listens to users' opinions regarding personal information protection. Users can report complaints through phone or email to the customer center. The company takes responsibility for providing prompt and sufficient responses to reported issues.</span>
                        </p>

                        <p>
                            <br /><span style="background-color:#f2f2f2">Article 14 (Notification and Announcement of Privacy Policy)</span>
                            <br />
                            <span style="background-color:#f2f2f2">This policy may be subject to additions, deletions, or modifications due to changes in government policies or company policies. In such cases, we will provide advance notice via the website or email at least 7 days before implementation, and if advance notice is difficult, we will promptly announce it.</span>
                            <br />
                            <span style="background-color:#f2f2f2">Furthermore, if there are any additions or changes related to matters requiring separate customer consent under laws such as the Act on Promotion of Information and Communications Network Utilization and Information Protection, we will obtain separate customer consent in accordance with the relevant laws.</span>
                            <br /><span style="background-color:#f2f2f2">This policy will be effective from the date of announcement.</span><br />
                        </p>
                        <p style="margin-top:10px; text-align:center;">   
                            <span style="background-color:#f2f2f2">Last Updated: February 15, 2024</span>
                        </p>
                    </div>
                    <div v-if="locale === 'zh-CN'" class="modal-body">
                        <p>
                            <span style="background-color:#f2f2f2">第1条 总则</span>
                            <br />
                            <span style="background-color:#f2f2f2">Pakus (以下简称“公司”) 制定了“个人信息处理政策”，并遵守该政策，公告会员个人信息的使用和保护措施，并遵守相关法规。</span>
                            <br />
                            <span style="background-color:#f2f2f2">会员对以下与个人信息的收集、使用、提供、委托等相关事项有权拒绝同意，拒绝同意的情况下，将无法使用全部或部分服务。</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第2条 个人信息的收集目的和使用目的</span>
                            <br />
                            <span style="background-color:#f2f2f2">
                                1. 公司未经用户事先同意不会公开用户的个人信息，并收集和使用个人信息的目的如下。
                            </span>
                            <br />
                            <span style="background-color:#f2f2f2">a. 服务提供</span>
                            <br />
                            <span style="background-color:#f2f2f2">提供报价单、申请单信息、个人资料广告展示、会员等基本服务提供、与服务提供相关的合同签订、维护、履行、管理、改进和服务提供、费用结算和内容服务使用、购买和付款、商品配送或账单等发送、客户咨询和服务使用信息提供</span>
                            <br />
                            <span style="background-color:#f2f2f2">b. 会员管理</span>
                            <br />
                            <span style="background-color:#f2f2f2">根据会员制服务的身份验证、个人识别、防止不良会员的滥用和未经授权使用、确认会员注册、维持、退出意愿、年龄确认、未满14岁儿童个人信息收集时法定代理人同意确认、法定代理人行使权利时确认本人、法律义务履行、调查违反法律和条款的行为、客户中心运营投诉处理、通知事项传达等</span>
                            <br />
                            <span style="background-color:#f2f2f2">c. 营销和广告利用</span>
                            <br />
                            <span style="background-color:#f2f2f2">新服务（产品）开发和特化、通讯、活动等广告性信息传达、根据人口统计特征提供服务和广告发布、营销和广告利用、访问频率了解或会员服务使用统计</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 根据收集的个人信息项目的使用目的如下。</span>
                            <br />
                            <span style="background-color:#f2f2f2">a. 姓名、用户名、密码：会员制服务使用的身份验证、会员注册、维护、退出</span>
                            <br />
                            <span style="background-color:#f2f2f2">b. 电子邮件地址、电话号码：通知事项传达、投诉处理等的顺畅沟通渠道的确保、新服务和新产品或活动信息等通知</span>
                            <br />
                            <span style="background-color:#f2f2f2">c. 信用卡信息（卡公司名称、卡号16位、卡有效期、卡持有人出生年月日）：服务和附加服务使用的费用支付</span>
                            <br />
                            <span style="background-color:#f2f2f2">d. 客户中心与客户通话录音：公司内客户中心和基本服务改进</span>
                            <br />
                            <span style="background-color:#f2f2f2">e. 电子邮件、电话号码和其他选择项目：为提供个性化服务而收集的资料、营销活动</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第3条 个人信息收集项目</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 公司为了让用户使用会员服务而注册会员时，将强制性地收集以下个人信息以提供服务。</span>
                            <br />
                            <span style="background-color:#f2f2f2">a. 强制项目：</span>
                            <br />
                            <span style="background-color:#f2f2f2">用户的姓名、用户名、密码、电子邮件地址、手机号码、法定代理人信息（未满14岁情况下）、银行账户信息、服务使用记录、访问日志记录、支付记录、Cookie、IP地址、不良使用记录、客户中心使用时的客户中心通话内容</span>
                            <br />
                            <span style="background-color:#f2f2f2">b. 选择项目：</span>
                            <br />
                            <span style="background-color:#f2f2f2">为了提供营销·活动信息而收集的额外个人信息</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 公司可能根据调查或活动需要要求用户选择性地提供个人信息，以进行统计分析或提供奖品等。即使同意接收公司发送的新闻简报中的广告邮件，成为接收广告邮件的受益者，也可能会被要求选择性地提供个人信息。</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. 公司不会收集可能侵犯用户基本权利的敏感个人信息（种族和民族、信仰和宗教、出生地和居住地、政治倾向和犯罪记录、健康状况和性生活等），如果必须收集，将确保事先获得用户同意。</span>
                            <br />
                            <span style="background-color:#f2f2f2">4. 为防止用户和会员之间的纠纷，公司可能要求用户进行实名认证。</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第4条 个人信息收集方式</span>
                            <br />
                            <span style="background-color:#f2f2f2">公司通过以下方式收集个人信息。</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 公司提供的平台、书面表格、电话/传真等服务注册或使用时，通过会员自愿提供收集</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 通过生成信息收集工具收集</span><br />&#xa0;
                        </p>
                        <p>
                            <span style="background-color:#f2f2f2">第5条 收集个人信息的保有和使用期限</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 除非法律另有规定，或者在没有特殊约定的情况下，公司在用户作为会员向公司提供服务并使用服务期间或者在第1条规定的目的实现之前，公司将持续保留用户的个人信息并用于提供服务等。</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 用户的个人信息原则上在达到个人信息收集目的或提供目的后将被销毁。但是，为防止服务混乱、协助调查机构、防止不良会员的不当使用再次发生以及解决纠纷，公司将在用户终止使用合同后的6个月内保留该会员的姓名、ID、联系方式、不当使用记录（服务使用记录、访问日志、Cookie、访问IP信息）。</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. 根据商法、电子商务等消费者保护相关法律等相关法律规定需要保留的情况下，公司将根据相关法律规定的一定期限保留会员信息。在此情况下，公司将仅出于保留目的使用所保留的信息，保留期限如下：</span>
                            <br />
                            <span style="background-color:#f2f2f2">• 广告记录：6个月（电子商务等消费者保护相关法律）</span>
                            <br />
                            <span style="background-color:#f2f2f2">• 合同或退款记录：5年（电子商务等消费者保护相关法律）</span>
                            <br />
                            <span style="background-color:#f2f2f2">• 付款及商品供应记录：5年（电子商务等消费者保护相关法律）</span>
                            <br />
                            <span style="background-color:#f2f2f2">• 消费者投诉或纠纷处理记录：3年（电子商务等消费者保护相关法律）</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第6条 个人信息提供给第三方</span>
                            <br />
                            <span style="background-color:#f2f2f2">公司仅在信息主体同意、法律特别规定等个人信息保护法第17条和第18条适用的情况下向第三方提供个人信息。</span>
                            <br />
                            <span style="background-color:#f2f2f2">在必要提供个人信息给第三方的情况下，将通过合理程序获得同意。</span>
                            <br />
                            <span style="background-color:#f2f2f2">公司以下列方式向第三方提供个人信息。</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 个人信息提供给第三方情况</span>
                            <br />
                            <span style="background-color:#f2f2f2">1) 根据国税厅通知提供按季度明细给税务局的酒类电子商务销售订单</span>
                            <br />
                            <span style="background-color:#f2f2f2">接收方：相关税务局</span>
                            <br />
                            <span style="background-color:#f2f2f2">提供项目：[销售方信息] 销售方个人信息（商号、营业者登记号等）、[购买方信息] 购买方个人信息（地址、姓名、出生年月日）、[订单信息] 订单日期、商品名称、数量、订单金额。在实现商品或服务提供目的后销毁（但根据相关法律规定，根据法定期限保留）</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第7条 个人信息的委托处理</span>
                            <br />
                            <span style="background-color:#f2f2f2">为了提高服务质量，公司委托部分必要业务以提供服务所需的个人信息，并根据相关法律规定规定必要事项以确保个人信息在委托合同下得到安全管理。共享的信息仅限于实现相关目的所需的最少信息。</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第8条 个人信息销毁程序和方法</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 用户通过公司网站输入的信息在达到目的后根据内部政策和其他相关法律规定（参考保有和使用期限）保存一段时间后将被销毁。</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 公司将根据第8条所述程序和方法，对用户本人直接请求的信息修改、删除或者注销处理。</span>
                            <br />
                            <span style="background-color:#f2f2f2">3. 如第3条所述，用户输入的个人信息仅用于临时目的（调查、活动、身份验证等）后将通过同样方式销毁处理。</span>
                            <br />
                            <span style="background-color:#f2f2f2">4. 公司将安全处理重要用户个人信息，为防止泄露，通过以下方式销毁个人信息。</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 纸质打印的个人信息通过碎纸机粉碎或者焚烧销毁。</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 以电子文件形式存储的个人信息使用技术手段使记录无法再生，进行删除。</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第9条 用户的权利</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 会员可以随时行使以下各项权利：</span>
                            <br />
                            <span style="background-color:#f2f2f2">0. 请求查看个人信息</span>
                            <br />
                            <span style="background-color:#f2f2f2">甲. 如果有错误，要求更正</span>
                            <br />
                            <span style="background-color:#f2f2f2">乙. 请求删除</span>
                            <br />
                            <span style="background-color:#f2f2f2">丙. 请求停止处理</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 根据第1款行使的权利，可以通过书面、电子邮件、传真等方式向公司行使，公司将要求请求者提供身份证明副本等证据以确认请求是否为本人意愿，一经确认为本人且发现个人信息存在错误或已超过保存期限等需要更正或删除的情况，将立即采取相应措施。</span>
                        <br />
                        <span style="background-color:#f2f2f2">4. 公司为了确保服务的顺利提供和保护未满14岁的儿童个人信息，限制未满14岁的儿童进行新会员注册。</span>
                        <br /><br />
                        <span style="background-color:#f2f2f2">第 10条（个人信息自动收集设备的安装和运行）</span>
                        <br />
                        <span style="background-color:#f2f2f2">1. 公司使用Cookie方式进行会员认证。这意味着在注销时Cookie不会自动保存在计算机上，而是会被删除，因此在使用公共场所或他人可使用的计算机时，在使用服务结束后务必注销以保护信息安全。</span>
                        <br />
                        <span style="background-color:#f2f2f2">2. 为了拒绝Cookie设置，用户可以通过选择浏览器选项来允许所有Cookie、每次保存时进行确认或拒绝保存所有Cookie。</span>
                        <br /><span style="background-color:#f2f2f2">3. 如果拒绝安装Cookie，可能会对服务提供造成困难。</span><br />&#xa0;
                        </p>

                        <p>
                            <span style="background-color:#f2f2f2">第11条 个人信息保护措施程序</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 公司在处理用户个人信息时，采取技术、管理和物理措施，防止信息丢失、盗窃、泄露、外部攻击、黑客等，以确保安全性。</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 公司采取的技术、管理和物理措施如下：</span>
                            <br />
                            <span style="background-color:#f2f2f2">甲. 为了安全处理个人信息，公司制定并实施单独的内部管理计划。</span>
                            <br />
                            <span style="background-color:#f2f2f2">乙. 为限制对个人信息的访问和访问权限，公司最小化处理用户个人信息的人员，并对相关员工进行持续的安全教育，并定期检查其是否遵守本政策。</span>
                            <br />
                            <span style="background-color:#f2f2f2">丙. 为了安全存储和传输个人信息，用户的个人信息受到密码保护，文件和传输数据进行加密，重要数据通过单独的安全功能保护，通过加密通信（SSL）等方式在网络上安全传输个人信息。</span>
                            <br />
                            <span style="background-color:#f2f2f2">丁. 为了应对个人信息侵犯事件，防止篡改、伪造和防止个人信息泄露、丢失或销毁，个人信息处理人员在访问个人信息处理系统时，记录访问时间、处理记录等，并单独保存以防篡改、丢失、销毁。</span>
                            <br />
                            <span style="background-color:#f2f2f2">戊. 公司通过使用防病毒程序，确保不会发生因计算机病毒导致的个人信息损害，并定期更新安全程序，安装和更新安全程序以保护个人信息。</span>
                            <br />
                            <span style="background-color:#f2f2f2">己. 为了安全保管个人信息，公司使用防止外部入侵的安全设备，并安装入侵检测系统，监视非法入侵等，采取物理措施如设立独立的存储设施或安装锁定设备等。</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第12条 个人信息保护负责人</span>
                            <br />
                            <span style="background-color:#f2f2f2">1. 公司负责全面管理与个人信息处理相关的工作，并指定个人信息保护负责人，负责处理个人信息处理和相关信息主体的投诉处理和损害救济等。</span>
                            <br />
                            <span style="background-color:#f2f2f2">姓名：李宇宗</span>
                            <br />
                            <span style="background-color:#f2f2f2">职位：CEO</span>
                            <br />
                            <span style="background-color:#f2f2f2">2. 尽管已经采取了技术补救措施，但由于黑客等基本网络风险导致的意外事故造成的信息损坏以及访客撰写的帖子引起的各种争议，公司不承担责任。</span>
                            <br />
                            <br />
                            <span style="background-color:#f2f2f2">第13条 权益侵害救济/投诉受理</span>
                            <br />
                            <span style="background-color:#f2f2f2">公司征集用户意见与个人信息保护相关事宜。用户可以通过客户服务中心电话或邮件举报投诉事项。公司将负责迅速并充分回复投诉事项。</span>
                        </p>

                        <p>
                            <br /><span style="background-color:#f2f2f2">第 14条（个人信息处理政策相关通知和通告）</span>
                            <br />
                            <span style="background-color:#f2f2f2">本政策可能根据政府或公司政策的变化进行内容的添加、删除、修改，若有变动，将在实施前7天通过网站或电子邮件等方式事先通知，若事先通知困难，将立即进行通知。</span>
                            <br />
                            <span style="background-color:#f2f2f2">此外，根据个人信息收集和利用、第三方提供等与信息通信网络利用促进和信息保护相关的法律等相关法律，若涉及需要客户单独同意的事项和相关内容的添加、修改时，将根据相关法律获得客户的单独同意。</span><br /><span style="background-color:#f2f2f2">本政策自公告日起生效。</span><br />
                        </p>
                        <p style="margin-top:10px; text-align:center;">   
                            <span style="background-color:#f2f2f2">最终修改基准日期：2024年2月15日</span>
                        </p>
                    </div>
                </div>
                </div>    
            </div>  
						<!--end::Form-->
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Content-->
			</div>
			<!--end::Authentication - Sign-up-->
		</div>
</template>

<script setup>

import useAuth from '@/composables/auth'
import { ref, computed } from 'vue';

import { useStore } from 'vuex';

const store = useStore()
const locale = computed(() => store.state.lang.locale)
const password = ref('password');
const passwordVisible = ref(false);
const { registerForm, validationErrors, processing, submitRegister } = useAuth();

const showPassword = () => {
	passwordVisible.value = !passwordVisible.value;
	password.value = password.value === 'password'? 'text' : 'password';
}
const passwordStrength = computed(() => {
  const strength = calculatePasswordStrength(registerForm.password);
  return strength;
});

function calculatePasswordStrength(password) {
  // Simple logic to calculate password strength (example)
  if (password.length >= 8) {
    return 4; // Strong
  } else if (password.length >= 6) {
    return 3; // Medium
  } else if (password.length >= 4) {
    return 2; // Weak
  } else {
    return 1; // Very Weak
  }
}

</script>
<style>
.background-image {
    background-image: url('../../assets/media/illustrations/sketchy-1/14.png')
}
</style>