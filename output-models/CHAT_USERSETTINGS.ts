import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CHAT_USERSETTINGSAttributes {
    L_COUNT_MOREPAGER?: number;
    STR_ORDER?: string;
    B_HIDEMEMBERS?: boolean;
    B_SHOWARCHIVED?: boolean;
    DTINSERT?: Date;
    STR_STATUS?: string;
    STRID: string;
    STR_USER?: string;
    STR_COLORSCHEME?: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "CHAT_USERSETTINGS",
	timestamps: false 
})
export class CHAT_USERSETTINGS extends Model<CHAT_USERSETTINGSAttributes, CHAT_USERSETTINGSAttributes> implements CHAT_USERSETTINGSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_COUNT_MOREPAGER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORDER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDEMEMBERS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHOWARCHIVED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_COLORSCHEME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}