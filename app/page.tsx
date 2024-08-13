"use client";

import Link from 'next/link';
import React from 'react';
import { IoTime } from "react-icons/io5";
import { IoIosPricetag } from 'react-icons/io';
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdManageHistory } from "react-icons/md";

const backgroundImageURL = 'https://static.vecteezy.com/system/resources/previews/003/791/383/original/illustration-of-sky-clouds-and-sun-design-blue-background-seamless-pattern-design-for-wallpaper-backdrop-cover-paper-and-print-on-fabric-modern-templates-free-vector.jpg';

const featured = [
  {
    icon: <IoTime />,
    title: 'Time',
    subtitle: 'Lorem ipsum',
    href: '/currentTime',
  },
  {
    icon: <BsCalendar2DateFill />,
    title: 'Date',
    subtitle: 'Lorem ipsum ',
    href: '/currentDate',
  },
  {
    icon: <MdManageHistory />,
    title: 'CRUD',
    subtitle: 'Lorem ipsum',
    href: '/crudPage',
  },
];

const Home = () => {
  return (
    <>
      <section className='pt-8 pb-14 lg:pt-16 lg:pb-28 bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-full'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center gap-2 mb-8'>
            <h2 className='h2'>
              Weather App
            </h2>
            <p className='max-w-[600px] mx-auto text-center'>
              Hi! Welcome
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'>
            {featured.map((feature, index) => (
              <Link href={feature.href} key={index} passHref>
                <div
                  className='relative flex flex-col justify-center items-center gap-4 border cursor-pointer transition-transform transform hover:scale-105'
                  style={{
                    backgroundImage: `url(${backgroundImageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '300px',
                  }}
                >
                  <div
                    className='text-4xl bg-primary-300 text-black w-[80px] h-[80px] rounded-full flex justify-center items-center'
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div className='flex flex-col justify-center items-center gap-2 text-center mt-auto p-4 bg-opacity-70 bg-gray-800 text-white'>
                    <h4 className='text-xl font-semibold'>{feature.title}</h4>
                    <p>{feature.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
