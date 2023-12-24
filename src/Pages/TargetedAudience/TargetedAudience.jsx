

const TargetedAudience = () => {
    return (
        <div className="w-4/5 mx-auto mt-12">
            <hr className="border border-blue-500 mt-4" />
            <h2 className="md:text-2xl lg:text-4xl font-bold text-center">Our Audience</h2>
            <hr className="border border-blue-500 mt-4" />
            <div>
                <p className="text-lg font-semibold">All type of people can be benefitted from our services. This system is totally up to a user. A user can create a new task, if it is needed the task can be be edited or user can delete the task. User can maintain their task by drag and drop from todo list ot ongoing or completed list. At the bottom line we want to say this platform is very user friendly and totally responsive for mobile phon and tab so that user can easily maintain their tasks from any type of device. Though all type of people can use this, three types of user are shown below:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="card bg-blue-300 p-2">
                    <h3 className="text-center text-2xl font-bold">Developers</h3>
                    <hr className="mt-2"/>
                    <p className="mt-4 mb-4">Developers can easily handle their daily routine using this platform. By adding task and doing only drag and drop they can make their life easy </p>
                </div>
                <div className="card bg-blue-300 p-2">
                    <h3 className="text-center text-2xl font-bold">Doctors</h3>
                    <hr className="mt-2"/>
                    <p className="mt-4 mb-4">Doctors can easily handle their daily routine using this platform. By adding task and doing only drag and drop they can make their life easy </p>
                </div>
                <div className="card bg-blue-300 p-2">
                    <h3 className="text-center text-2xl font-bold">Teachers</h3>
                    <hr className="mt-2"/>
                    <p className="mt-4 mb-4">Teachers can easily handle their daily routine using this platform. By adding task and doing only drag and drop they can make their life easy </p>
                </div>
                
            </div>
        </div>
    );
};

export default TargetedAudience;