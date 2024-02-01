import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XPOLL_OPTION94D01ACCAttributes {
    DT_END?: Date;
    FLT_DURATION?: number;
    FKID?: number;
    STR_OPTION?: string;
    TXT_DESCRIPTION?: string;
    B_SET?: boolean;
    FLT_VOTE_PERCENT?: number;
    L_FILEINFORMATION?: number;
    LUSERIDINSERT?: number;
    LORDER?: number;
    LID: number;
    DT_DATE?: Date;
    DTEDIT?: Date;
    L_VOTE_COUNT?: number;
    DTINSERT?: Date;
    STR_COLOR?: string;
    LUSERID?: number;
}

@Table({
	tableName: "XPOLL_OPTION94D01ACC",
	timestamps: false 
})
export class XPOLL_OPTION94D01ACC extends Model<XPOLL_OPTION94D01ACCAttributes, XPOLL_OPTION94D01ACCAttributes> implements XPOLL_OPTION94D01ACCAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_END?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_DURATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_OPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DESCRIPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SET?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_VOTE_PERCENT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DATE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_VOTE_COUNT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_COLOR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}