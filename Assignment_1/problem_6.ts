interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (obj: Profile, updateObj: Partial<Profile>) => {
  const updatedProfile = { ...obj, ...updateObj };
  return updatedProfile;
};

const person1 = console.log(
  updateProfile(
    { name: "shakil", age: 23, email: "shakil4432@gmail.com" },
    { email: "shakil5445@gmail.com" }
  )
);
