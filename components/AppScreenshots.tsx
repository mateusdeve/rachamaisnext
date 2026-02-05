export default function AppScreenshots() {
  const screenshots = [
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzXrFS5uGsQR0HjpkwMGLhpezAAuTAqCMdPwBgKanwcG7AtrIIyS33u_Fs_l_EDtT7A0uAQlf-4w3EkXkwqtJg2ajsFm01yCoY85w1zEiNRHDuRGTAeQz2V_31AY0kvlXZY85_M6ribVw_3u-LqiCJnUDAi7BvkFmArtTSiZcDdVqvmVFnqn26VW5sBEqqPIxV3isT1o8mXkmF3MryD2GfYFtJLCmd5fBbRZD_w7RL4Ilpn3ongqruvhXMzS_0FYp5AI9SMt35DaGz",
      alt: "Screenshot of RachaMais app showing group overview",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWFZH3RBFAqALmtKQmmCzFJehBvxrNo8H8hql6KZ38tt3_9NxLxNSd9h3SOBovGj-m9dBu2zpSliP0GgpPKmt2rN53LF4ZtjE90Kknv6ui8dqNNjpLK7AHalngSWGo3LUX0XEtRtEriwIBfyIoEYC00Uz0O1S5vZIITsmXTDquZdjswSftKQ-yds7wXcM2kafmq4I5PPYossAbmSJrdBc5Xx58F26nn6fWEMdGwnAa3pcGED1DREQ3JdXQzr0X0x_WJgJiz83JSpSD",
      alt: "Screenshot of adding a new expense in RachaMais",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtWvaAgsFl9-Y1DPPkvpNyjS1PD-3Ku8xW7LIop35XFfTd1mPbKe6YSyq5RNsq6rj35dj4m1YcxQgFt_-55JWQ9d_oPkRxc_9sJIgDIA6D91TTffIe-MCrkibD55tuBDGpEJJZ8zLosqd0TwuADz2ra4vxi83omXhKk_jQa963Lv9aOXEj72HSQzgomJu_AuMpqectv0BivytFaRXjAvnkxOE8eve6ovLjde8pVka2YQr8z1qtgfCoB8ctJsET1ac0mfdgQmV_34WK",
      alt: "Screenshot of balance settlements in RachaMais",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbfWpgVMMv6C0Gk-aq1-IzSFkH91c0-ICxy4SJR-sAAdkM2HK_Toz2IYCU6oyJozCehVAk7Fqin1YXs2fP1pSfsb_Jki4o5fsLBHIrhuM_0_rf9DUHv9ntgnXA5vOofoIn1Ri2XvT1COyMKRTYMyEOKmJI4kFGRNse-E8Y-5sYKSb6uJsLylR75-6A5sF2MDp5A5CoskLAAI0vxkd4CnMymJk7f1VBE4UbLnN37969QGVn-vtz4wp5UrUkw28ChFzWZuDULZd6CEGi",
      alt: "Screenshot of user profile and stats in RachaMais",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbLkxAln2beiRSFhi3REuMbVKK2z9vFiMjp4tXChP08dzvnliKzta83j1U_sxRVzD5vmKlp6wCNDWkT0_sLjBRqMw8cR71VNWtXAVHLUPtjWTH7KTVwVYvBzFDaUuA1fAdVtWZoC8fELiQC_8uCkzbHkRqumpr3J7U3yLfEkDAYLb05l7ON5Wa53ZX7aVIkSo0-r7T_a5H5Lv7_JqkHAqSjc84x4BMe7M7wpEEi6WK-VIrZcCP_oJcAq0UFilzan3Hw3orFeUl0sVf",
      alt: "Screenshot of group invitations in RachaMais",
    },
  ];

  return (
    <section className="py-20 px-6 overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Experiência Simples e Moderna</h2>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="min-w-[280px] h-[560px] bg-gray-200 rounded-[2.5rem] snap-center overflow-hidden border-4 border-white shadow-lg"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                data-alt={screenshot.alt}
                style={{ backgroundImage: `url("${screenshot.url}")` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
