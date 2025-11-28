import { UserModel } from "../DB_Shcemas/UserSchema";
import { Types } from "mongoose";

export async function getUser(id: string) {
  try {
    const user = await UserModel.findById(id);

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  } catch (err) {
    console.error("Error fetching user:", err);
    throw err;
  }
}

export async function createUser(params: any) {
  try {
    const user = await UserModel.findOne({ email: params.email });
    if (user) {
      throw new Error("A user with this email already exists.");
    }

    const newUser = await UserModel.create(params);
    return newUser;
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
}

export async function updateUser(id: string, updateData: any) {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return updatedUser;
  } catch (err) {
    console.error("Error updating user:", err);
    throw err;
  }
}

export async function deleteUser(id: string) {
  try {
    await UserModel.findByIdAndDelete(id);
    return `User with ID ${id} has been deleted.`;
  } catch (err) {
    console.error("Error deleting user:", err);
    throw err;
  }
}

export async function getAllUsers() {
  return await UserModel.find();
}

export async function findUserByName(userName: string) {
  try {
    const user = await UserModel.findOne({ name: userName });

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  } catch (err) {
    console.error("Error finding user by name:", err);
    throw err;
  }
}

export async function addFriend(userId: string, friendId: string) {
  const friendObjectId = new Types.ObjectId(friendId);
  try {
    if (userId === friendId) {
      throw new Error("A user cannot add themselves as a friend.");
    }

    const user = await UserModel.findById(userId);
    const friend = await UserModel.findById(friendId);

    if (!user) {
      throw new Error("User not found.");
    }

    if (user.friends.includes(friendObjectId)) {
      throw new Error("This user is already a friend.");
    }

    if (!friend) {
      throw new Error("Friend user not found.");
    }

    if (friend.friendsRequest.includes(new Types.ObjectId(userId))) {
      throw new Error("Friend request already sent to this user.");
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      friendId,
      { $push: { friendsRequest: userId } },
      { new: true }
    );
    return updatedUser;
  } catch (err) {
    console.error("Error adding friend:", err);
    throw err;
  }
}

export async function acceptFriendRequest(userId: string, friendId: string) {
  try {
    const friendObjectId = new Types.ObjectId(friendId);

    const user = await UserModel.findById(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    if (!user.friendsRequest.includes(friendObjectId)) {
      throw new Error("No friend request from this user.");
    }

    await UserModel.findByIdAndUpdate(
      userId,
      {
        $pull: { friendsRequest: friendObjectId },
        $push: { friends: friendObjectId },
      },
      { new: true }
    );

    const updatedFriend = await UserModel.findByIdAndUpdate(
      friendId,
      { $push: { friends: userId } },
      { new: true }
    );

    return updatedFriend;
  } catch (err) {
    console.error("Error accepting friend request:", err);
    throw err;
  }
}

export async function declineFriendRequest(userId: string, friendId: string) {
  try {
    const friendObjectId = new Types.ObjectId(friendId);

    const user = await UserModel.findById(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    if (!user.friendsRequest.includes(friendObjectId)) {
      throw new Error("No friend request from this user.");
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $pull: { friendsRequest: friendObjectId } },
      { new: true }
    );
    return updatedUser;
  } catch (err) {
    console.error("Error declining friend request:", err);
    throw err;
  }
}

export async function removeFriend(userId: string, friendId: string) {
  try {
    const friendObjectId = new Types.ObjectId(friendId);

    const user = await UserModel.findById(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    if (!user.friends.includes(friendObjectId)) {
      throw new Error("This user is not in your friends list.");
    }

    const removedFriend = await UserModel.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendObjectId } },
      { new: true }
    );
    return removedFriend;
  } catch (err) {
    console.error("Error removing friend:", err);
    throw err;
  }
}
