import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  title: {
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
    textAlign: "center",
  },
  title2: {
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
    marginTop: "60px !important",
    textAlign: "center",
  },
}));

const BioMetric = () => {
  const classes = useStyle();

  return (
    <div>
      <Typography className={classes.title}>
        Biometric Authentication
      </Typography>

      <p>
        You can use Touch ID ® or Face ID ® or Fingerprint to log in to the
        DeshiPay app instead of your user ID and password. You must agree to the
        terms and conditions to enable Touch ID or Face ID or Fingerprint.
        Please ensure that Touch ID or Face ID or Fingerprint is also enabled on
        your device in order to enable it for the app.
      </p>

      <p>
        You acknowledge and agree that anyone with saved biometric information
        on your device will have authority to access your accounts and will be
        authorized to initiate transactions through the DeshiPay app.
      </p>

      <p>
        GREEN AND RED TECHNOLOGIES LIMITED ADVISES YOU TO REVIEW AND CONFIRM
        THAT ALL REGISTERED BIOMETRIC INFORMATION BELONGS TO INDIVIDUALS WITH
        AUTHORITY TO INITIATE TRANSACTIONS ON ACCOUNTS ACCESSED THROUGH THE
        DESHIPAY APP. BY AGREEING BELOW, GREEN AND RED TECHNOLOGIES LIMITED
        RELIES ON YOUR REPRESENTATION THAT ANYONE WITH REGISTERED BIOMETRIC
        INFORMATION IS AUTHORIZED TO VIEW INFORMATION AND TRANSACT ON THE
        ACCOUNTS ACCESSED THROUGH THE DESHIPAY APP.
      </p>

      <p>
        Green and Red Technologies Limited does not provide the Touch ID or Face
        ID technology and does not save or access your biometric information.
      </p>

      <p>
        Green and Red Technologies Limited does not save your online banking
        password to your device.
      </p>

      <Typography className={classes.title2}>
        বায়োমেট্রিক প্রমাণীকরণ
      </Typography>

      <p>
        আপনি আপনার ইউজার আইডি এবং পাসওয়ার্ডের পরিবর্তে DeshiPay অ্যাপে লগ ইন
        করার জন্য টাচ আইডি অথবা ফেস আইডি অথবা ফিঙ্গারপ্রিন্ট ব্যবহার করতে পারেন।
        টাচ আইডি বা ফেস আইডি বা ফিঙ্গারপ্রিন্ট সক্ষম করতে আপনাকে অবশ্যই নিয়ম ও
        শর্তাবলীর সাথে সম্মত হতে হবে। অনুগ্রহ করে নিশ্চিত করুন যে আপনার ডিভাইসে
        টাচ আইডি বা ফেস আইডি বা ফিঙ্গারপ্রিন্ট চালু আছে যাতে এটি অ্যাপের জন্য
        সক্ষম হয়।
      </p>

      <p>
        আপনি স্বীকার করেন এবং সম্মত হন যে আপনার ডিভাইসে সংরক্ষিত বায়োমেট্রিক
        তথ্য সহ যে কেউ আপনার অ্যাকাউন্ট অ্যাক্সেস করার অধিকার পাবে এবং DeshiPay
        অ্যাপের মাধ্যমে লেনদেন শুরু করার জন্য অনুমোদিত হবে।
      </p>

      <p>
        গ্রীন এবং রেড টেকনোলজিস লিমিটেড আপনাকে পর্যালোচনা এবং নিশ্চিত করার জন্য
        পরামর্শ দেয় যে সমস্ত রেজিস্টার্ড বায়োমেট্রিক ইনফরমেশন যা অ্যাকচুয়েন্স
        অ্যাকচেন্সে ইনটিটিয়েট ট্রানজ্যাকশনের সাথে স্বতন্ত্র ব্যক্তিদের সাথে
        সম্পর্কিত। নীচে সম্মতি দিয়ে, সবুজ এবং লাল প্রযুক্তির সীমাবদ্ধ আপনার
        প্রতিনিধিত্বের উপর নির্ভর করে যা নিবন্ধিত বায়োমেট্রিক তথ্যের সাথে যে
        কেউ নিবন্ধিত তথ্য দেখার এবং অ্যাকোচারে চুক্তি করার অনুমতি দেয়।
      </p>

      <p>
        গ্রিন অ্যান্ড রেড টেকনোলজিস লিমিটেড টাচ আইডি বা ফেস আইডি প্রযুক্তি
        সরবরাহ করে না এবং আপনার বায়োমেট্রিক তথ্য সংরক্ষণ বা অ্যাক্সেস করে না।
      </p>

      <p>
        গ্রিন অ্যান্ড রেড টেকনোলজিস লিমিটেড আপনার ডিভাইসে আপনার অনলাইন ব্যাংকিং
        পাসওয়ার্ড সংরক্ষণ করে না।
      </p>
    </div>
  );
};

export default BioMetric;
