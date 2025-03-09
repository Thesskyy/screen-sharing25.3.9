"use client";
import { useState } from "react";
import LoginPage from "@/components/LoginPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false);

    if (!loggedIn) {
        return <LoginPage onLogin={() => setLoggedIn(true)} />;
    }

    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://pic.theshy.best/2025-03/9/【哲风壁纸】庄达菲-庄达菲电脑壁纸.png')" }}>
            <div className="py-12 px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex justify-between items-center space-x-4">
                        <div className="flex justify-center md:justify-start">
                            <img src="https://pic.theshy.best/2025-03/9/【哲风壁纸】动漫角色-持剑.png" alt="Logo" className="h-20 w-20 rounded-full object-cover" />
                        </div>

                        <div className="text-center md:text-left space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl" style={{ color: "#eaeded " }}>
                                Share Your Screen Instantly
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300" style={{ color: "#bdc3c9" }}>
                                Create a room, share the code, and start presenting to your audience in seconds.
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        <Card className="hover:shadow-lg transition-shadow bg-white/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Monitor className="h-6 w-6" />
                                    Start Sharing
                                </CardTitle>
                                <CardDescription style={{ color: "#000000" }}>Create a room and share your screen with others</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link href="/host">
                                    <Button className="w-full bg-black/50">Create Room</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow bg-white/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-6 w-6" />
                                    Join a Room
                                </CardTitle>
                                <CardDescription style={{ color: "#000000" }}>Enter a room code to view someone's screen</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link href="/join">
                                    <Button variant="outline" className="w-full">
                                        Join Room
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
