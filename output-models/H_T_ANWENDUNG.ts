import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface H_T_ANWENDUNGAttributes {
    REF_8443A443?: string;
    LUSERID?: number;
    REF_ADB34327?: string;
    REF_B4684BAC?: string;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    STRID: string;
    DTEDIT?: Date;
    L_FILEINFORMATION?: number;
}

@Table({
	tableName: "H_T_ANWENDUNG",
	timestamps: false 
})
export class H_T_ANWENDUNG extends Model<H_T_ANWENDUNGAttributes, H_T_ANWENDUNGAttributes> implements H_T_ANWENDUNGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_8443A443?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ADB34327?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_B4684BAC?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

}