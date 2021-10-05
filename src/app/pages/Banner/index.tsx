import { Grid, Box } from '@mui/material';
import styled from 'styled-components';
export function Banner() {
  const Grid = styled.section`
    background-color: #171a23;
    padding: 60px 20px;
  `;

  const BoxTitle = styled.h3`
    color: #dba83d;
    font-size: 36px;
    margin-bottom: 100px;
    text-align: center;
    font-family: 'Montserrat';
    font-weight: 600;
  `;
  const BoxConTainer = styled.section`
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
  `;
  const BoxRow = styled.section`
    display: flex;
    flex-wrap: wrap;
  `;
  const BoxCol = styled.section`
    flex: 0 0 100%;
    max-width: 100%;

    @media (min-width: 960px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
  `;
  const BoxCenter = styled.section`
    text-align: center;
    color: #fff;
    margin-bottom: 40px;
  `;
  const BoxShort = styled.section``;
  const BoxH3 = styled.section`
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 40px;
    font-weight: 600;
    font-family: 'Montserrat';
  `;
  const BoxContent = styled.section`
    padding: 0px 74px;
  `;
  return (
    <>
      <Grid>
        <BoxConTainer>
          <BoxTitle>Why borrow with us?</BoxTitle>

          <BoxRow>
            <BoxCol>
              <BoxCenter>
                <svg
                  data-v-03b17e97=""
                  width="100"
                  height="100"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto"
                >
                  <path
                    data-v-03b17e97=""
                    d="M6.07373 23.314H18.4328C19.08 23.314 19.6047 22.7895 19.6047 22.1422C19.6047 21.4948 19.08 20.9703 18.4328 20.9703H6.07373C5.42654 20.9703 4.90186 21.4948 4.90186 22.1422C4.90186 22.7895 5.42639 23.314 6.07373 23.314Z"
                    fill="url(#paint0_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M18.0091 28.9557H13.127C12.4798 28.9557 11.9551 29.4803 11.9551 30.1276C11.9551 30.775 12.4798 31.2995 13.127 31.2995H18.0091C18.6563 31.2995 19.181 30.775 19.181 30.1276C19.181 29.4803 18.6563 28.9557 18.0091 28.9557Z"
                    fill="url(#paint1_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M1.17188 37.0823H13.1269C13.7741 37.0823 14.2987 36.5578 14.2987 35.9105C14.2987 35.2631 13.7741 34.7386 13.1269 34.7386H1.17188C0.524687 34.7386 0 35.2631 0 35.9105C0 36.5578 0.524687 37.0823 1.17188 37.0823Z"
                    fill="url(#paint2_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M19.6047 57.8577C19.6047 57.2103 19.08 56.6858 18.4328 56.6858H6.07373C5.42654 56.6858 4.90186 57.2103 4.90186 57.8577C4.90186 58.505 5.42654 59.0295 6.07373 59.0295H18.4328C19.08 59.0295 19.6047 58.505 19.6047 57.8577Z"
                    fill="url(#paint3_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M18.0091 48.7004H13.127C12.4798 48.7004 11.9551 49.225 11.9551 49.8723C11.9551 50.5197 12.4798 51.0442 13.127 51.0442H18.0091C18.6563 51.0442 19.181 50.5197 19.181 49.8723C19.181 49.225 18.6563 48.7004 18.0091 48.7004Z"
                    fill="url(#paint4_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M14.2987 44.0895C14.2987 43.4422 13.7741 42.9177 13.1269 42.9177H1.17188C0.524687 42.9177 0 43.4422 0 44.0895C0 44.7369 0.524687 45.2614 1.17188 45.2614H13.1269C13.7741 45.2614 14.2987 44.7369 14.2987 44.0895Z"
                    fill="url(#paint5_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M49.9263 25.9109C50.5736 25.9109 51.0981 25.3864 51.0981 24.7391V22.9503C51.0981 22.303 50.5736 21.7784 49.9263 21.7784C49.2789 21.7784 48.7544 22.303 48.7544 22.9503V24.7391C48.7544 25.3864 49.2789 25.9109 49.9263 25.9109Z"
                    fill="url(#paint6_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M62.8108 27.1153C62.353 26.6578 61.6112 26.6578 61.1535 27.1153L59.8887 28.3801C59.431 28.8379 59.431 29.5798 59.8887 30.0375C60.3466 30.4951 61.0883 30.495 61.546 30.0375L62.8108 28.7726C63.2683 28.315 63.2683 27.5731 62.8108 27.1153Z"
                    fill="url(#paint7_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M65.1875 38.8281C64.5402 38.8281 64.0156 39.3527 64.0156 40C64.0156 40.6473 64.5402 41.1719 65.1875 41.1719H66.9761C67.6234 41.1719 68.148 40.6473 68.148 40C68.148 39.3527 67.6234 38.8281 66.9761 38.8281H65.1875Z"
                    fill="url(#paint8_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M61.546 49.9623C61.0882 49.5048 60.3463 49.5048 59.8887 49.9623C59.431 50.4201 59.431 51.162 59.8887 51.6196L61.1535 52.8845C61.6115 53.3421 62.3532 53.342 62.8108 52.8845C63.2685 52.4266 63.2685 51.6848 62.8108 51.2271L61.546 49.9623Z"
                    fill="url(#paint9_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M48.7544 55.2609V57.0495C48.7544 57.6968 49.2789 58.2213 49.9263 58.2213C50.5736 58.2213 51.0981 57.6968 51.0981 57.0495V55.2609C51.0981 54.6135 50.5736 54.089 49.9263 54.089C49.2789 54.089 48.7544 54.6137 48.7544 55.2609Z"
                    fill="url(#paint10_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M38.3068 49.9623L37.042 51.2271C36.5843 51.6849 36.5843 52.4268 37.042 52.8845C37.4998 53.3421 38.2417 53.342 38.6992 52.8845L39.964 51.6196C40.4217 51.1618 40.4217 50.4199 39.964 49.9623C39.5065 49.5048 38.7645 49.5048 38.3068 49.9623Z"
                    fill="url(#paint11_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M32.8765 38.8281C32.2293 38.8281 31.7046 39.3527 31.7046 40C31.7046 40.6473 32.2293 41.1719 32.8765 41.1719H34.6652C35.3124 41.1719 35.8371 40.6473 35.8371 40C35.8371 39.3527 35.3124 38.8281 34.6652 38.8281H32.8765Z"
                    fill="url(#paint12_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M39.964 28.3801L38.6992 27.1153C38.2415 26.6578 37.4995 26.6578 37.042 27.1153C36.5843 27.5731 36.5843 28.315 37.042 28.7726L38.3068 30.0375C38.7646 30.4951 39.5065 30.495 39.964 30.0375C40.4217 29.5798 40.4217 28.8379 39.964 28.3801Z"
                    fill="url(#paint13_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M56.2278 40C56.2278 39.3527 55.7033 38.8281 55.056 38.8281H51.0981V30.1275C51.0981 29.4802 50.5736 28.9556 49.9263 28.9556C49.2789 28.9556 48.7544 29.4802 48.7544 30.1275V40C48.7544 40.6473 49.2789 41.1719 49.9263 41.1719H55.056C55.7031 41.1719 56.2278 40.6473 56.2278 40Z"
                    fill="url(#paint14_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M72.1472 39.8066C72.7933 39.7673 73.2851 39.2119 73.2459 38.5659C72.5004 26.2686 62.2573 16.6356 49.9264 16.6356C37.0433 16.6356 26.562 27.1169 26.562 40.0002C26.562 52.8833 37.0433 63.3645 49.9264 63.3645C61.4684 63.3645 71.317 54.908 73.0303 43.4963C73.1264 42.8563 72.6854 42.2595 72.0453 42.1634C71.4068 42.0677 70.8086 42.5081 70.7125 43.1484C69.1734 53.4006 60.3209 61.0209 49.9264 61.0209C38.3356 61.0209 28.9058 51.5911 28.9058 40.0003C28.9058 28.4095 38.3356 18.9795 49.9264 18.9795C61.0203 18.9795 70.2358 27.6453 70.9064 38.7081C70.9454 39.3537 71.5004 39.8441 72.1472 39.8066Z"
                    fill="url(#paint15_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M49.9263 9.92639C45.8043 9.92639 41.7657 10.7815 38.0485 12.3808H17.3721C16.7249 12.3808 16.2002 12.9053 16.2002 13.5526C16.2002 14.2 16.7249 14.7245 17.3721 14.7245H33.6397C31.4402 16.1401 29.4154 17.8476 27.63 19.8189C27.1957 20.2984 27.2322 21.0395 27.7119 21.474C28.1918 21.9086 28.9325 21.8719 29.3672 21.3922C34.6175 15.595 42.1111 12.2701 49.9263 12.2701C65.2166 12.2701 77.6563 24.7097 77.6563 40C77.6563 55.2901 65.2168 67.7298 49.9263 67.7298C34.636 67.7298 22.1964 55.2903 22.1964 40C22.1964 34.6456 23.726 29.4487 26.6194 24.9709C26.9707 24.4273 26.8147 23.702 26.2711 23.3508C25.7275 22.9997 25.0022 23.1553 24.6508 23.699C21.5118 28.5565 19.8527 34.1933 19.8527 40C19.8527 50.5884 25.3536 59.9153 33.6472 65.2754H17.3722C16.725 65.2754 16.2004 65.8 16.2004 66.4473C16.2004 67.0947 16.725 67.6192 17.3722 67.6192H38.0324C41.6824 69.1972 45.7038 70.0736 49.9265 70.0736C66.509 70.0736 80.0001 56.5826 80.0001 40C80.0001 23.4173 66.509 9.92639 49.9263 9.92639Z"
                    fill="url(#paint16_linear)"
                  ></path>
                  <defs data-v-03b17e97="">
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint0_linear"
                      x1="19.6047"
                      y1="20.9703"
                      x2="18.9956"
                      y2="25.342"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint1_linear"
                      x1="19.181"
                      y1="28.9557"
                      x2="18.0117"
                      y2="33.0809"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint2_linear"
                      x1="14.2987"
                      y1="34.7386"
                      x2="13.6732"
                      y2="39.1056"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint3_linear"
                      x1="19.6047"
                      y1="56.6858"
                      x2="18.9956"
                      y2="61.0576"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint4_linear"
                      x1="19.181"
                      y1="48.7004"
                      x2="18.0117"
                      y2="52.8256"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint5_linear"
                      x1="14.2987"
                      y1="42.9177"
                      x2="13.6732"
                      y2="47.2847"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint6_linear"
                      x1="51.0981"
                      y1="21.7784"
                      x2="47.5099"
                      y2="24.1071"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint7_linear"
                      x1="63.154"
                      y1="26.7722"
                      x2="59.7541"
                      y2="30.6625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint8_linear"
                      x1="68.148"
                      y1="38.8281"
                      x2="66.3746"
                      y2="42.4057"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint9_linear"
                      x1="63.1541"
                      y1="49.6191"
                      x2="59.7543"
                      y2="53.5096"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint10_linear"
                      x1="51.0981"
                      y1="54.089"
                      x2="47.51"
                      y2="56.4176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint11_linear"
                      x1="40.3072"
                      y1="49.6191"
                      x2="36.9074"
                      y2="53.5094"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint12_linear"
                      x1="35.8371"
                      y1="38.8281"
                      x2="34.0638"
                      y2="42.4058"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint13_linear"
                      x1="40.3072"
                      y1="26.7722"
                      x2="36.9074"
                      y2="30.6624"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint14_linear"
                      x1="56.2278"
                      y1="28.9556"
                      x2="45.3148"
                      y2="36.5948"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint15_linear"
                      x1="73.2481"
                      y1="16.6356"
                      x2="29.2156"
                      y2="66.9731"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint16_linear"
                      x1="80.0001"
                      y1="9.92639"
                      x2="23.8716"
                      y2="78.051"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <BoxShort>
                  <BoxH3>Quicker than the bank</BoxH3>
                  <BoxContent>
                    Banks are yesterdays news. Get the money you need without
                    having to wait.
                  </BoxContent>
                </BoxShort>
              </BoxCenter>
            </BoxCol>
            <BoxCol>
              <BoxCenter>
                <svg
                  data-v-03b17e97=""
                  width="100"
                  height="100"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-v-03b17e97=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.395 5.20002C28.7238 5.19869 29.0387 5.33233 29.2662 5.56973L45.1058 22.098C45.5644 22.5765 45.5482 23.3361 45.0697 23.7947C44.5912 24.2532 43.8316 24.237 43.373 23.7586L28.4069 8.14174L4.78054 33.2H17.1998C17.8626 33.2 18.3998 33.7373 18.3998 34.4V50.4C18.3998 51.0628 17.8626 51.6 17.1998 51.6C16.5371 51.6 15.9998 51.0628 15.9998 50.4V35.6H1.99983C1.52089 35.6 1.08782 35.3152 0.898048 34.8755C0.70828 34.4357 0.798166 33.9253 1.12673 33.5768L27.5267 5.5768C27.7523 5.33756 28.0661 5.20136 28.395 5.20002Z"
                    fill="url(#paint0_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2 62C17.8627 62 18.4 62.5373 18.4 63.2V69.2H38.8C39.4627 69.2 40 69.7373 40 70.4C40 71.0627 39.4627 71.6 38.8 71.6H17.2C16.5373 71.6 16 71.0627 16 70.4V63.2C16 62.5373 16.5373 62 17.2 62Z"
                    fill="url(#paint1_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M18.4002 56.8C18.4002 57.6836 17.6839 58.4 16.8002 58.4C15.9165 58.4 15.2002 57.6836 15.2002 56.8C15.2002 55.9163 15.9165 55.2 16.8002 55.2C17.6839 55.2 18.4002 55.9163 18.4002 56.8Z"
                    fill="url(#paint2_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.8 66.4C62.962 66.4 71.2 58.1621 71.2 48C71.2 37.838 62.962 29.6 52.8 29.6C42.638 29.6 34.4 37.838 34.4 48C34.4 58.1621 42.638 66.4 52.8 66.4ZM52.8 68.8C64.2875 68.8 73.6 59.4875 73.6 48C73.6 36.5125 64.2875 27.2 52.8 27.2C41.3125 27.2 32 36.5125 32 48C32 59.4875 41.3125 68.8 52.8 68.8Z"
                    fill="url(#paint3_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.5998 43.2C46.9253 43.2 47.9998 42.1255 47.9998 40.8C47.9998 39.4745 46.9253 38.4 45.5998 38.4C44.2743 38.4 43.1998 39.4745 43.1998 40.8C43.1998 42.1255 44.2743 43.2 45.5998 43.2ZM45.5998 45.6C48.2508 45.6 50.3998 43.451 50.3998 40.8C50.3998 38.149 48.2508 36 45.5998 36C42.9488 36 40.7998 38.149 40.7998 40.8C40.7998 43.451 42.9488 45.6 45.5998 45.6Z"
                    fill="url(#paint4_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M60.0002 57.6C61.3257 57.6 62.4002 56.5255 62.4002 55.2C62.4002 53.8745 61.3257 52.8 60.0002 52.8C58.6747 52.8 57.6002 53.8745 57.6002 55.2C57.6002 56.5255 58.6747 57.6 60.0002 57.6ZM60.0002 60C62.6512 60 64.8002 57.851 64.8002 55.2C64.8002 52.5491 62.6512 50.4 60.0002 50.4C57.3492 50.4 55.2002 52.5491 55.2002 55.2C55.2002 57.851 57.3492 60 60.0002 60Z"
                    fill="url(#paint5_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.8001 72.8C66.4968 72.8 77.6001 61.6966 77.6001 48C77.6001 34.3033 66.4968 23.2 52.8001 23.2C39.1034 23.2 28.0001 34.3033 28.0001 48C28.0001 61.6966 39.1034 72.8 52.8001 72.8ZM52.8001 75.2C67.8222 75.2 80.0001 63.0221 80.0001 48C80.0001 32.9778 67.8222 20.8 52.8001 20.8C37.778 20.8 25.6001 32.9778 25.6001 48C25.6001 63.0221 37.778 75.2 52.8001 75.2Z"
                    fill="url(#paint6_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M60.2189 38.4486C60.6875 37.9799 61.4473 37.9799 61.9159 38.4486C62.3845 38.9172 62.3845 39.677 61.9159 40.1456L44.9453 57.1162C44.4767 57.5848 43.7169 57.5848 43.2483 57.1162C42.7797 56.6476 42.7797 55.8878 43.2483 55.4191L60.2189 38.4486Z"
                    fill="url(#paint7_linear)"
                  ></path>
                  <defs data-v-03b17e97="">
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint0_linear"
                      x1="45.4394"
                      y1="5.20001"
                      x2="1.52756"
                      y2="53.5394"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint1_linear"
                      x1="40"
                      y1="62"
                      x2="34.3136"
                      y2="78.2665"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint2_linear"
                      x1="18.4002"
                      y1="55.2"
                      x2="15.3852"
                      y2="58.6498"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint3_linear"
                      x1="73.6"
                      y1="27.2"
                      x2="34.4053"
                      y2="72.0481"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint4_linear"
                      x1="50.3998"
                      y1="36"
                      x2="41.3549"
                      y2="46.3496"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint5_linear"
                      x1="64.8002"
                      y1="50.4"
                      x2="55.7553"
                      y2="60.7496"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint6_linear"
                      x1="80.0001"
                      y1="20.8"
                      x2="28.7455"
                      y2="79.4475"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint7_linear"
                      x1="62.7644"
                      y1="39.2971"
                      x2="58.7316"
                      y2="36.0242"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <BoxShort>
                  <BoxH3>Better interest rates</BoxH3>
                  <BoxContent>
                    P2P lending lets you negotiate with the lender to arrange
                    the best possible interest rates.
                  </BoxContent>
                </BoxShort>
              </BoxCenter>
            </BoxCol>
            <BoxCol>
              <BoxCenter>
                <svg
                  data-v-03b17e97=""
                  width="100"
                  height="100"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-v-03b17e97=""
                    d="M42.5839 38.772C42.0759 38.6029 41.5544 38.4248 41.0362 38.2375V31.0028C42.5312 31.2203 43.4297 31.9486 43.4945 32.0026C43.9828 32.4214 44.7189 32.3676 45.1414 31.8811C45.5659 31.3925 45.5139 30.6523 45.0251 30.2279C44.94 30.1539 43.4556 28.8945 41.0362 28.6409V27.8645C41.0362 27.2172 40.5117 26.6926 39.8644 26.6926C39.217 26.6926 38.6925 27.2172 38.6925 27.8645V28.7317C38.3961 28.7843 38.0923 28.8517 37.7798 28.9404C35.69 29.5333 34.1484 31.2397 33.7567 33.3937C33.4131 35.2839 34.0631 37.0958 35.4531 38.1225C36.2591 38.7179 37.2742 39.2631 38.6923 39.8461V48.8269C37.24 48.7753 36.3666 48.5283 34.8237 47.5779C34.273 47.2389 33.5509 47.41 33.2114 47.9611C32.8719 48.512 33.0436 49.2339 33.5945 49.5734C35.5897 50.8025 36.8647 51.11 38.6923 51.1695V52.1354C38.6923 52.7828 39.2169 53.3073 39.8642 53.3073C40.5116 53.3073 41.0361 52.7828 41.0361 52.1354V51.0878C44.3705 50.5719 46.4781 47.9725 46.885 45.4111C47.3623 42.4065 45.6739 39.8008 42.5839 38.772ZM36.8458 36.2372C36.1802 35.7456 35.8802 34.8167 36.0627 33.8129C36.2433 32.8193 36.9575 31.6098 38.4195 31.195C38.5116 31.1689 38.6025 31.1453 38.6925 31.1236V37.289C37.9861 36.9601 37.3502 36.6098 36.8458 36.2372ZM44.5703 45.0433C44.325 46.5881 43.13 48.2383 41.0362 48.7062V40.7214C41.2966 40.8114 41.5631 40.9023 41.8436 40.9958C44.8133 41.9844 44.6816 44.3437 44.5703 45.0433Z"
                    fill="url(#paint0_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M74.1952 31.4512H74.1242C72.6597 31.4512 71.3442 30.5114 70.8508 29.1127C70.4659 28.0219 70.0172 26.9388 69.517 25.8934C68.8742 24.5502 69.1381 22.9516 70.1742 21.9156L70.2245 21.8653C72.4878 19.602 72.4878 15.9191 70.2245 13.6558L66.3442 9.77547C64.0806 7.51234 60.3978 7.51266 58.1361 9.77422L58.0842 9.82594C57.0484 10.8619 55.4502 11.1264 54.1064 10.4828C53.0614 9.98281 51.9783 9.53406 50.8873 9.14937C49.4886 8.65578 48.5488 7.34031 48.5488 5.87578V5.80484C48.5488 2.60406 45.9447 0 42.7439 0H37.2562C34.0555 0 31.4514 2.60406 31.4514 5.80484V5.87578C31.4514 7.34031 30.5116 8.65578 29.1128 9.14922C28.022 9.53406 26.9389 9.98281 25.8936 10.483C24.5502 11.1256 22.9516 10.8619 21.9158 9.82578L21.8655 9.77547C20.7689 8.67906 19.3111 8.07531 17.7606 8.07531C16.21 8.07531 14.7522 8.67906 13.6558 9.77547L9.77547 13.6558C7.51219 15.9191 7.51219 19.602 9.77547 21.8653L9.82578 21.9156C10.8619 22.9516 11.1258 24.5502 10.4828 25.8936C9.98281 26.9386 9.53406 28.0217 9.14937 29.1127C8.65578 30.5114 7.34031 31.4512 5.87578 31.4512H5.80484C2.60406 31.4512 0 34.0553 0 37.2561V42.7438C0 45.9445 2.60406 48.5486 5.80484 48.5486H5.87578C7.34031 48.5486 8.65578 49.4884 9.14922 50.8872C9.53406 51.978 9.98281 53.0611 10.483 54.1064C11.1258 55.4497 10.8619 57.0483 9.82578 58.0842L9.77547 58.1345C7.51219 60.3978 7.51219 64.0808 9.77547 66.3441L13.6558 70.2242C14.7522 71.3208 16.21 71.9245 17.7606 71.9245C19.3111 71.9245 20.7689 71.3208 21.8655 70.2244L21.9158 70.1741C22.9517 69.1383 24.5502 68.8739 25.8937 69.517C26.9387 70.017 28.0219 70.4658 29.1128 70.8505C30.5116 71.3441 31.4514 72.6595 31.4514 74.1241V74.195C31.4514 77.3958 34.0555 79.9998 37.2562 79.9998H42.7439C45.9447 79.9998 48.5488 77.3958 48.5488 74.195V74.1241C48.5488 72.6595 49.4886 71.3441 50.8873 70.8506C51.9781 70.4658 53.0613 70.017 54.1066 69.5169C55.4498 68.8741 57.0483 69.1378 58.0844 70.1741L58.1347 70.2244C60.3981 72.4875 64.0808 72.4875 66.3442 70.2244L70.2245 66.3441C72.4878 64.0808 72.4878 60.3978 70.2245 58.1345L70.1742 58.0842C69.1381 57.0483 68.8742 55.4497 69.5172 54.1063C70.0172 53.0612 70.4659 51.9781 70.8506 50.8872C71.3442 49.4884 72.6597 48.5486 74.1242 48.5486H74.1952C77.3959 48.5486 80 45.9445 80 42.7438V37.2561C80 34.0553 77.3959 31.4512 74.1952 31.4512ZM77.6562 42.7439C77.6562 44.6523 76.1034 46.205 74.1952 46.205H74.1242C71.6677 46.205 69.4641 47.7733 68.6403 50.1077C68.2833 51.12 67.867 52.1248 67.403 53.0945C66.3317 55.3328 66.7792 58.0041 68.5167 59.7417L68.567 59.792C69.9167 61.1416 69.9167 63.3372 68.567 64.6867L64.6867 68.567C63.3372 69.9169 61.1416 69.9169 59.792 68.567L59.7417 68.5167C58.0042 66.7795 55.3331 66.3319 53.0947 67.4028C52.1248 67.867 51.1198 68.2833 50.1077 68.6405C47.7734 69.4641 46.205 71.6677 46.205 74.1242V74.1952C46.205 76.1036 44.6522 77.6562 42.7439 77.6562H37.2562C35.3478 77.6562 33.7952 76.1034 33.7952 74.1952V74.1242C33.7952 71.6677 32.2269 69.4641 29.8925 68.6403C28.8802 68.2833 27.8753 67.867 26.9056 67.403C26.0941 67.0145 25.2258 66.8258 24.3655 66.8258C22.8531 66.8258 21.3661 67.4092 20.2584 68.5167L20.2081 68.567C19.5544 69.2209 18.6853 69.5808 17.7608 69.5808C16.8363 69.5808 15.9672 69.2208 15.3134 68.567L11.4331 64.6867C10.0834 63.3372 10.0834 61.1416 11.4331 59.792L11.4834 59.7417C13.2209 58.0041 13.6684 55.3328 12.5973 53.0947C12.1331 52.1248 11.7169 51.1198 11.3597 50.1077C10.5361 47.7734 8.3325 46.205 5.87594 46.205H5.805C3.89656 46.205 2.34391 44.6522 2.34391 42.7439V37.2562C2.34391 35.3478 3.89672 33.7952 5.805 33.7952H5.87594C8.3325 33.7952 10.5361 32.2269 11.3598 29.8925C11.7169 28.8802 12.1331 27.8753 12.5972 26.9056C13.6684 24.6673 13.2209 21.9961 11.4834 20.2584L11.4331 20.2081C10.0834 18.8586 10.0834 16.663 11.4331 15.3134L15.3133 11.4328C15.967 10.7791 16.8361 10.4192 17.7606 10.4192C18.6852 10.4192 19.5542 10.7792 20.208 11.433L20.2583 11.4833C21.9959 13.2208 24.6672 13.6684 26.9053 12.5972C27.8752 12.133 28.8802 11.7167 29.8923 11.3595C32.2266 10.5359 33.795 8.33234 33.795 5.87578V5.80484C33.795 3.89641 35.3478 2.34375 37.2561 2.34375H42.7438C44.6522 2.34375 46.2048 3.89656 46.2048 5.80484V5.87578C46.2048 8.33234 47.7731 10.5359 50.1075 11.3597C51.1198 11.7167 52.1247 12.133 53.0944 12.597C55.3325 13.6684 58.0041 13.2208 59.74 11.4845L59.7919 11.433C61.1414 10.0831 63.337 10.0831 64.6866 11.433L68.5669 15.3133C69.9166 16.6628 69.9166 18.8584 68.5669 20.208L68.5166 20.2583C66.7791 21.9959 66.3316 24.6672 67.4027 26.9053C67.8669 27.8752 68.2831 28.8802 68.6403 29.8923C69.4639 32.2266 71.6675 33.795 74.1241 33.795H74.195C76.1034 33.795 77.6561 35.3478 77.6561 37.2561V42.7439H77.6562Z"
                    fill="url(#paint1_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M15.9917 40C15.9917 26.7617 26.7619 15.9917 40 15.9917C45.4342 15.9917 50.5595 17.7622 54.8218 21.1119C55.3306 21.5119 56.0672 21.4233 56.4672 20.9147C56.8672 20.4058 56.7787 19.6689 56.27 19.2692C51.5908 15.5917 45.9647 13.6479 40 13.6479C25.4694 13.6479 13.6479 25.4694 13.6479 40C13.6479 46.0095 15.6181 51.6692 19.3458 56.3672C19.577 56.6587 19.919 56.8106 20.2645 56.8106C20.5197 56.8106 20.7767 56.7276 20.9922 56.5567C21.499 56.1545 21.584 55.4173 21.1817 54.9103C17.7864 50.6311 15.9917 45.4751 15.9917 40Z"
                    fill="url(#paint2_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M58.7934 23.2001C58.2915 23.6089 58.2162 24.3472 58.6248 24.8489C62.0965 29.1109 64.0084 34.4919 64.0084 40C64.0084 53.2383 53.2383 64.0083 40.0001 64.0083C34.4903 64.0083 29.1083 62.0953 24.8453 58.6215C24.3434 58.2128 23.6051 58.2881 23.1965 58.7898C22.7878 59.2915 22.8629 60.0297 23.3648 60.4386C28.0447 64.2519 33.9525 66.352 40.0001 66.352C54.5308 66.352 66.3522 54.5306 66.3522 40C66.3522 33.9542 64.2533 28.0478 60.4422 23.3689C60.0336 22.8672 59.2956 22.7915 58.7934 23.2001Z"
                    fill="url(#paint3_linear)"
                  ></path>
                  <path
                    data-v-03b17e97=""
                    d="M40 19.6094C28.7566 19.6094 19.6094 28.7566 19.6094 40C19.6094 51.2434 28.7566 60.3906 40 60.3906C51.2434 60.3906 60.3906 51.2434 60.3906 40C60.3906 28.7566 51.2434 19.6094 40 19.6094ZM40 58.0469C30.0489 58.0469 21.9531 49.9511 21.9531 40C21.9531 30.0489 30.0489 21.9531 40 21.9531C49.9511 21.9531 58.0469 30.0489 58.0469 40C58.0469 49.9511 49.9511 58.0469 40 58.0469Z"
                    fill="url(#paint4_linear)"
                  ></path>
                  <defs data-v-03b17e97="">
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint0_linear"
                      x1="46.9649"
                      y1="26.6926"
                      x2="24.6592"
                      y2="40.0492"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint1_linear"
                      x1="80"
                      y1="-4.28106e-06"
                      x2="4.62573"
                      y2="86.2463"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint2_linear"
                      x1="56.7177"
                      y1="13.6479"
                      x2="16.0391"
                      y2="60.0939"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint3_linear"
                      x1="66.3522"
                      y1="22.937"
                      x2="25.4479"
                      y2="69.7456"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint4_linear"
                      x1="60.3906"
                      y1="19.6094"
                      x2="21.9673"
                      y2="63.5748"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <BoxShort>
                  <BoxH3>Finance assets without selling</BoxH3>
                  <BoxContent>
                    Put your assets to work so you can continue to meet your
                    financial obligations.
                  </BoxContent>
                </BoxShort>
              </BoxCenter>
            </BoxCol>
            <BoxCol>
              <BoxCenter>
                <svg
                  data-v-03b17e97=""
                  width="100"
                  height="100"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-v-03b17e97="" clipPath="url(#clip0)">
                    <path
                      data-v-03b17e97=""
                      d="M28.8925 45.0494C28.8925 41.7027 24.1718 39.1791 17.9116 39.1791C11.6514 39.1791 6.93066 41.7027 6.93066 45.0494C6.93066 48.3962 11.6514 50.9198 17.9116 50.9198C24.1718 50.9198 28.8925 48.3962 28.8925 45.0494ZM9.27426 45.0494C9.27426 43.5768 12.56 41.5229 17.9114 41.5229C23.2629 41.5229 26.5486 43.5769 26.5486 45.0494C26.5486 46.5219 23.2629 48.576 17.9114 48.576C12.56 48.576 9.27426 46.5221 9.27426 45.0494Z"
                      fill="url(#paint0_linear)"
                    ></path>
                    <path
                      data-v-03b17e97=""
                      d="M55.816 36.2642C56.4634 36.2642 56.9879 35.7396 56.9879 35.0923C56.9879 34.4449 56.4634 33.9204 55.816 33.9204H33.0454C32.3981 33.9204 31.8735 34.4449 31.8735 35.0923C31.8735 35.7396 32.3981 36.2642 33.0454 36.2642H55.816Z"
                      fill="url(#paint1_linear)"
                    ></path>
                    <path
                      data-v-03b17e97=""
                      d="M71.1767 38.9176V12.6581C71.1767 10.6887 69.5745 9.08667 67.6053 9.08667H3.57141C1.60219 9.08667 0 10.6889 0 12.6581V53.9034C0 55.8728 1.60219 57.4748 3.57141 57.4748H10.6347C11.282 57.4748 11.8066 56.9503 11.8066 56.3029C11.8066 55.6556 11.282 55.131 10.6347 55.131H3.57141C2.89438 55.131 2.34375 54.5804 2.34375 53.9034V27.6507H68.833V37.8426C66.9955 37.1642 65.0102 36.7931 62.9398 36.7931C58.6941 36.7931 54.8059 38.3525 51.8172 40.9281H44.4836C43.8363 40.9281 43.3117 41.4526 43.3117 42.1C43.3117 42.7473 43.8363 43.2718 44.4836 43.2718H49.5675C47.2598 46.182 45.8798 49.8593 45.8798 53.8532C45.8798 54.2831 45.8963 54.7092 45.9277 55.1312H15.3202C14.6728 55.1312 14.1483 55.6557 14.1483 56.3031C14.1483 56.9504 14.6728 57.475 15.3202 57.475H46.2681C47.9334 65.1479 54.7755 70.9134 62.9398 70.9134C66.8291 70.9134 70.4923 69.6381 73.5339 67.2254C74.0409 66.8232 74.1259 66.086 73.7237 65.579C73.3217 65.0721 72.5845 64.987 72.0773 65.3892C69.4545 67.4698 66.2948 68.5695 62.94 68.5695C54.8255 68.5695 48.2237 61.9678 48.2237 53.8531C48.2237 45.7384 54.8255 39.1367 62.94 39.1367C71.0547 39.1367 77.6564 45.7384 77.6564 53.8531C77.6564 56.8612 76.7544 59.7543 75.0477 62.2192C74.6792 62.7512 74.8119 63.4814 75.3439 63.8498C75.8761 64.2184 76.6061 64.0854 76.9745 63.5535C78.9538 60.6946 80 57.3404 80 53.8532C80 47.4315 76.433 41.8279 71.1767 38.9176ZM2.34375 25.307V21.3143H53.4733C54.1206 21.3143 54.6452 20.7898 54.6452 20.1425C54.6452 19.4951 54.1206 18.9706 53.4733 18.9706H2.34375V12.6581C2.34375 11.981 2.89438 11.4304 3.57141 11.4304H67.6052C68.2822 11.4304 68.8328 11.981 68.8328 12.6581V18.9706H58.1586C57.5112 18.9706 56.9867 19.4951 56.9867 20.1425C56.9867 20.7898 57.5112 21.3143 58.1586 21.3143H68.8328V25.307H2.34375Z"
                      fill="url(#paint2_linear)"
                    ></path>
                    <path
                      data-v-03b17e97=""
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M69.6484 47.9514C70.1171 48.4201 70.1171 49.1799 69.6484 49.6485L58.4484 60.8485C57.9798 61.3171 57.22 61.3171 56.7514 60.8485C56.2827 60.3799 56.2827 59.6201 56.7514 59.1514L67.9514 47.9514C68.42 47.4828 69.1798 47.4828 69.6484 47.9514Z"
                      fill="url(#paint3_linear)"
                    ></path>
                    <path
                      data-v-03b17e97=""
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.7514 47.9514C57.22 47.4828 57.9798 47.4828 58.4484 47.9514L69.6484 59.1514C70.1171 59.6201 70.1171 60.3799 69.6484 60.8485C69.1798 61.3171 68.42 61.3171 67.9514 60.8485L56.7514 49.6485C56.2827 49.1799 56.2827 48.4201 56.7514 47.9514Z"
                      fill="url(#paint4_linear)"
                    ></path>
                  </g>
                  <defs data-v-03b17e97="">
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint0_linear"
                      x1="28.8925"
                      y1="39.1791"
                      x2="20.3312"
                      y2="57.5039"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint1_linear"
                      x1="56.9879"
                      y1="33.9204"
                      x2="56.6268"
                      y2="38.3476"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint2_linear"
                      x1="80"
                      y1="9.08667"
                      x2="25.4714"
                      y2="89.8203"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint3_linear"
                      x1="69.9999"
                      y1="47.6"
                      x2="57.1863"
                      y2="62.2619"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      data-v-03b17e97=""
                      id="paint4_linear"
                      x1="69.9999"
                      y1="47.6"
                      x2="57.1863"
                      y2="62.2619"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop data-v-03b17e97="" stopColor="#BD8727"></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.483111"
                        stopColor="#FFD574"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="0.611179"
                        stopColor="#FECA50"
                      ></stop>
                      <stop
                        data-v-03b17e97=""
                        offset="1"
                        stopColor="#BD8727"
                      ></stop>
                    </linearGradient>
                    <clipPath data-v-03b17e97="" id="clip0">
                      <rect
                        data-v-03b17e97=""
                        width="80"
                        height="80"
                        fill="white"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <BoxShort>
                  <BoxH3>No credit checks</BoxH3>
                  <BoxContent>
                    Borrow without the background checks. Anyone can get the
                    financing they need.
                  </BoxContent>
                </BoxShort>
              </BoxCenter>
            </BoxCol>
          </BoxRow>
        </BoxConTainer>
      </Grid>
    </>
  );
}
