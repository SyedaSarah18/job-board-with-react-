import React from 'react'
import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
    // console.log(jobs); //Checking if the jobs data is being fetched
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs; //For when there is no backend server and jobs are being fetched from jobs.json file which was earlier an array
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchJobs = async () => {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        try {
          const response = await fetch(apiUrl); 
          const data = await response.json();
          setJobs(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
      fetchJobs();
    }, []);

    return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Featured Jobs' : 'Browse Jobs'}
        </h2>
        
            {loading ? (
              <Spinner loading={loading} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobListing key={job.id} job={ job } />
              ))}
              </div>
            )}
        
        </div>
    </section>
  )
}

export default JobListings