import GithubCorner from "react-github-corner";
// import tic_tac_toe from "./cards/tic_tac_toe";
// import {tic_tac_toe} from "gamify/pages/assets/tic_tac_toe";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl mt-10 text-center font-bold ">
        Hi, Weclome to
        <br /> <span className="text-5xl">GAMIFY</span>
        <br />
      </h1>
      <br />
      <p className="text-center font-sans font-bold">
        Feeling bored? Try out these games
      </p>
      {/* ------------------------------------------------------- */}

      <br />

      <div class="flex justify-between flex-wrap">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="data:image/jpeg;base64,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"
            alt="Sunset in the mountains"
            className="w-40 m-auto"
          />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-center text-xl mb-2">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base">
              The retro Tic Tac Toe Game ,Play with computer and try to win
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <div className="text-center">
              <button class="inline-block items-center bg-gray-200 rounded-full text-center px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CLICK TO PLAY
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------ */}

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAB7CAMAAABwzk+5AAAAt1BMVEX///8AAAABAQF9fH2DgoKGhYZ4d3jsAAD8///5+fnq6uoIAAAkHiCamprS0tL8/PzY2Njh4eEYDxKsrKyysrIrKirtFyHz8/PKysrtABPExMSNjY2npqcNAARycnJeXl5GQ0TztbJrams3NzcdFxlLSkrvvr+7ursyMDHypKFVVFT33d3viIjtIyjrR0j57Ontamv00M7tU1PsXmHtdnPvgIDqKy7vl5jxOz/ycnnyeoL0rbD1oabvDwQJAAAHIElEQVRoge2abXuiOBSGOQIC8qJEwaJGUEOl2NbadjrT7f7/37XhNcEixY7udLs+H1qvRLk9ITk5D1EQLrrooosuukjo/UbvJzWC0ad7PysRug29XRDPwJQaryqCdGF+TWb/epO/2txuWHOFaVsD7ZTMheJdqynyTrlnV5bYVSchARzI41rmOjCzF5p51Zq58Tzvmv7fuq7yoHJMOb9WF4gO0IGQgzKmCPlS9QHstkx1d+cpC2H84nqP3AAWzP4SCDYta6rjoI45jhAa0P/LDnGOSE4bCr2597z7LddY3E+TRmlnL3R2h7n7aSFEYfSbEas9MoG6iuu+jFWuLWfaYBRDNkcwqGEKa0BBl77tKKSgbj3XdaszM2cuUWeWt4wB+XVMYQgEGez7tGQ+UabyVsO0DbJiTQiK71VdKzExYH0k8sFz7+5dOpHeMSegm2XTEKBYDjyzv8SGTkj7lZIgn2mUm+1dFZoxh6Cza42gjIZjjn2dGDMdgSm0lvpDcb0dXZ8vHg/NmCNA7D7JqJwnjNkLMXIswXIw+G3Xp3pLkUlOSKHX5dTNmBbApGixEcH9faa9QigapOECRi3Hd6e4BYmuU7dcohlTC1CQr/Qrh7DhK5gDglCQhzcjMG3H3CpsRHdPD2V+y9fKBBAxrwaT2ZTmhrj8VM68ojkqLLOPPeJTcpM0bjPhkkKRh0aAMQA4osEXKxlzRDOBL5xO5V7W60Kilcgv+oxJ8/tJt25+/7Qtay99Z8y+edrq79vVJl+IKTdetawijtdIkg9oGqJweqhTngYNvVLjxOrBYSEDfbq3sUYZSlK3XiJNeuKBvsO906RxPvzssJ/tfjZetSlhn2ut/Anm/yMn1DOLze4kTG0tzyvlYsnsvxW1g/Z8c0KmNqXLHMGcW8wl86fiZVD1XlF2B5hHFZqpBkQnHZo/dK6wLJm0YEqh6qPnekXxUWVeGRAci+wQbAy1/hAhXBYDBVNVr6mX2dBanxZr29qxpTaKDpJ4zCMjLSKwTE0BreJWRTXJ5pC6UNyX3YPieZuyXuKZJq2KRNCxfoR9mOr6Mn9J3UGRLLl5qy5+Pd2/3P/iijWOOQFCXW9vShDMhJbSEDOrWowKS8SvFXX3+tfrjy1XFTJmf+UHKWsQINzWDk50zLKcjPVeDfPm+a/X17da5hr8vNIeGChsyTQxZx2ZJ+LH9u+nh+fnp6dbVjIz5hJHhU2RcdtARcTtsWvQJ/tMaqKokdEelJfX6/dMGlxhSgdsNnwgCRuMWRfnbeJokgGm6B/aPpMw82139JZ+0NS5OOcI791PGuWdksVHPZTn7dQqc4VWxZBPWsdpQaf8djYhkVBhpsg846nUNypPe8wh4MLHxFxK+UAx1vNnXP2YrbGcufV4U6runjM+tz6XgON0bESMmHH7QL0AcGQOevY6oGaymBBFnG+P1zWf4ZjanFaBU2sYYILaPzsZi7oOumNQM+m8y7dCv+4j1Wc1Rlp+YjKpe+shDbqRnnyMeyJwTJ3QkxOH3239uC/X2FrP1vzQHFebaINBW4/dIKmxEvg+tabcOLa/48tE6YDkEAXyoU5Jpr7sYK/4BX1ZVzwgiTov6VBnc2/3P+bLvop3uDC/P1NlW/rRlKnOJ5A9plbdjjmmuigKX/WZL/WbtM5JQ0Ahtz9XmZOVLtWf0QkbRfmRhqo+K/yBW4No/kuX9xV1OgfjnAEhesTlFz7OhwTKzhLaKMbQ1QQbGdXDCp65BgMFiSeuYwrak5dEWp4ltFDfx7DsrYg+rzRzTI0OwUywYp01VebtOIH+ZGcJbUQLN+pag2ojx6RmMR3+JSoPPqprhUbqea7SNspUJjIMZ6++45gGIWkF2gdSzLIqU1Uf3bu987YPmdgw8J7VYMweoLxMmZZ2ao95o9x5rntMnEMwSITBr1RujGmVNmRdnipVmAlSSZzUz9b3c6JTc675gBy+Jm7NVCnSVW6EzYunPLbMCdQXpSXeDFCHe/bBdmUbinGnY2u/Z6ZIGuH2QfHctzah9lcoXyVWABCXM4mrBBDJvE8fEeOd/0yR2aCqb673q834xgjF+YW0KQ45ZjlvJT1z/1K+ZirMRYIs3rl5VJSP63kR+CN+mx/bktmja2QsaDJNDb3yYwXzVeGnjrr4OC/M2LH8nvjcR2+1s3R07tCa+33C7eLILWwKh474KzneBIwR5vaA39qzzUOesbqXDaTYN2t/+3FK/Yna5E/8HmzY+NyluffTanbqx/r4iy666KKLvqcanpidSzkz/FeZnU4HfHMtz01TXobQObloQKtVFEZREAdhlAAypjWQrauJPRML5v7/z72AjOk4QeQQI4ocp1MyzaveejJZ2yPxHHFGfuyvYt8P6Z+gZIbifLn0/bk1Pwdz5ft+EPuhuIrjktnJ760zJ2dgdirzp1MwWecZkO/1D/L/i7i2mfOgAAAAAElFTkSuQmCC"
            alt="Sunset in the mountains"
            className="object-fill m-auto"
          />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-center text-xl mb-2">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base">
              The retro Tic Tac Toe Game ,Play with computer and try to win
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <div className="text-center">
              <button class=" items-center bg-gray-200 rounded-full text-center px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CLICK TO PLAY
              </button>
            </div>
          </div>
        </div>

        {/* ----------------------- */}

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAB7CAMAAABwzk+5AAAAt1BMVEX///8AAAABAQF9fH2DgoKGhYZ4d3jsAAD8///5+fnq6uoIAAAkHiCamprS0tL8/PzY2Njh4eEYDxKsrKyysrIrKirtFyHz8/PKysrtABPExMSNjY2npqcNAARycnJeXl5GQ0TztbJrams3NzcdFxlLSkrvvr+7ursyMDHypKFVVFT33d3viIjtIyjrR0j57Ontamv00M7tU1PsXmHtdnPvgIDqKy7vl5jxOz/ycnnyeoL0rbD1oabvDwQJAAAHIElEQVRoge2abXuiOBSGOQIC8qJEwaJGUEOl2NbadjrT7f7/37XhNcEixY7udLs+H1qvRLk9ITk5D1EQLrrooosuukjo/UbvJzWC0ad7PysRug29XRDPwJQaryqCdGF+TWb/epO/2txuWHOFaVsD7ZTMheJdqynyTrlnV5bYVSchARzI41rmOjCzF5p51Zq58Tzvmv7fuq7yoHJMOb9WF4gO0IGQgzKmCPlS9QHstkx1d+cpC2H84nqP3AAWzP4SCDYta6rjoI45jhAa0P/LDnGOSE4bCr2597z7LddY3E+TRmlnL3R2h7n7aSFEYfSbEas9MoG6iuu+jFWuLWfaYBRDNkcwqGEKa0BBl77tKKSgbj3XdaszM2cuUWeWt4wB+XVMYQgEGez7tGQ+UabyVsO0DbJiTQiK71VdKzExYH0k8sFz7+5dOpHeMSegm2XTEKBYDjyzv8SGTkj7lZIgn2mUm+1dFZoxh6Cza42gjIZjjn2dGDMdgSm0lvpDcb0dXZ8vHg/NmCNA7D7JqJwnjNkLMXIswXIw+G3Xp3pLkUlOSKHX5dTNmBbApGixEcH9faa9QigapOECRi3Hd6e4BYmuU7dcohlTC1CQr/Qrh7DhK5gDglCQhzcjMG3H3CpsRHdPD2V+y9fKBBAxrwaT2ZTmhrj8VM68ojkqLLOPPeJTcpM0bjPhkkKRh0aAMQA4osEXKxlzRDOBL5xO5V7W60Kilcgv+oxJ8/tJt25+/7Qtay99Z8y+edrq79vVJl+IKTdetawijtdIkg9oGqJweqhTngYNvVLjxOrBYSEDfbq3sUYZSlK3XiJNeuKBvsO906RxPvzssJ/tfjZetSlhn2ut/Anm/yMn1DOLze4kTG0tzyvlYsnsvxW1g/Z8c0KmNqXLHMGcW8wl86fiZVD1XlF2B5hHFZqpBkQnHZo/dK6wLJm0YEqh6qPnekXxUWVeGRAci+wQbAy1/hAhXBYDBVNVr6mX2dBanxZr29qxpTaKDpJ4zCMjLSKwTE0BreJWRTXJ5pC6UNyX3YPieZuyXuKZJq2KRNCxfoR9mOr6Mn9J3UGRLLl5qy5+Pd2/3P/iijWOOQFCXW9vShDMhJbSEDOrWowKS8SvFXX3+tfrjy1XFTJmf+UHKWsQINzWDk50zLKcjPVeDfPm+a/X17da5hr8vNIeGChsyTQxZx2ZJ+LH9u+nh+fnp6dbVjIz5hJHhU2RcdtARcTtsWvQJ/tMaqKokdEelJfX6/dMGlxhSgdsNnwgCRuMWRfnbeJokgGm6B/aPpMw82139JZ+0NS5OOcI791PGuWdksVHPZTn7dQqc4VWxZBPWsdpQaf8djYhkVBhpsg846nUNypPe8wh4MLHxFxK+UAx1vNnXP2YrbGcufV4U6runjM+tz6XgON0bESMmHH7QL0AcGQOevY6oGaymBBFnG+P1zWf4ZjanFaBU2sYYILaPzsZi7oOumNQM+m8y7dCv+4j1Wc1Rlp+YjKpe+shDbqRnnyMeyJwTJ3QkxOH3239uC/X2FrP1vzQHFebaINBW4/dIKmxEvg+tabcOLa/48tE6YDkEAXyoU5Jpr7sYK/4BX1ZVzwgiTov6VBnc2/3P+bLvop3uDC/P1NlW/rRlKnOJ5A9plbdjjmmuigKX/WZL/WbtM5JQ0Ahtz9XmZOVLtWf0QkbRfmRhqo+K/yBW4No/kuX9xV1OgfjnAEhesTlFz7OhwTKzhLaKMbQ1QQbGdXDCp65BgMFiSeuYwrak5dEWp4ltFDfx7DsrYg+rzRzTI0OwUywYp01VebtOIH+ZGcJbUQLN+pag2ojx6RmMR3+JSoPPqprhUbqea7SNspUJjIMZ6++45gGIWkF2gdSzLIqU1Uf3bu987YPmdgw8J7VYMweoLxMmZZ2ao95o9x5rntMnEMwSITBr1RujGmVNmRdnipVmAlSSZzUz9b3c6JTc675gBy+Jm7NVCnSVW6EzYunPLbMCdQXpSXeDFCHe/bBdmUbinGnY2u/Z6ZIGuH2QfHctzah9lcoXyVWABCXM4mrBBDJvE8fEeOd/0yR2aCqb673q834xgjF+YW0KQ45ZjlvJT1z/1K+ZirMRYIs3rl5VJSP63kR+CN+mx/bktmja2QsaDJNDb3yYwXzVeGnjrr4OC/M2LH8nvjcR2+1s3R07tCa+33C7eLILWwKh474KzneBIwR5vaA39qzzUOesbqXDaTYN2t/+3FK/Yna5E/8HmzY+NyluffTanbqx/r4iy666KKLvqcanpidSzkz/FeZnU4HfHMtz01TXobQObloQKtVFEZREAdhlAAypjWQrauJPRML5v7/z72AjOk4QeQQI4ocp1MyzaveejJZ2yPxHHFGfuyvYt8P6Z+gZIbifLn0/bk1Pwdz5ft+EPuhuIrjktnJ760zJ2dgdirzp1MwWecZkO/1D/L/i7i2mfOgAAAAAElFTkSuQmCC"
            alt="Sunset in the mountains"
            className="w-40 m-auto"
          />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-center text-xl mb-2">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base">
              The retro Tic Tac Toe Game ,Play with computer and try to win
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <div className="text-center">
              <button class="inline-block items-center bg-gray-200 rounded-full text-center px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CLICK TO PLAY
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="data:image/png;base64,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"
            alt="Sunset in the mountains"
            className="w-40 m-auto"
          />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-center text-xl mb-2">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base">
              The retro Tic Tac Toe Game ,Play with computer and try to win
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <div className="text-center">
              <button class="inline-block items-center bg-gray-200 rounded-full text-center px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CLICK TO PLAY
              </button>
            </div>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="data:image/png;base64,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"
            alt="Sunset in the mountains"
            className="w-40 m-auto"
          />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-center text-xl mb-2">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base">
              The retro Tic Tac Toe Game ,Play with computer and try to win
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <div className="text-center">
              <button class="inline-block items-center bg-gray-200 rounded-full text-center px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CLICK TO PLAY
              </button>
            </div>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="data:image/png;base64,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"
            alt="Sunset in the mountains"
            className="w-40 m-auto"
          />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-center text-xl mb-2">
              The Coldest Sunset
            </div>
            <p class="text-gray-700 text-base">
              The retro Tic Tac Toe Game ,Play with computer and try to win
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <div className="text-center">
              <button class="inline-block items-center bg-gray-200 rounded-full text-center px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CLICK TO PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
