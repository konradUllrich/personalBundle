import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_COMMENTAttributes {
    REF_PROFILE_ID?: string;
    LUSERIDINSERT?: number;
    L_FILEINFORMATION?: number;
    LID: number;
    DTINSERT?: Date;
    L_PARENT_LID?: number;
    LUSERID?: number;
    DTEDIT?: Date;
    L_CHART?: number;
    FKLID?: number;
    TXT_COMMENT?: string;
    TXT_MEDIADATA?: string;
}

@Table({
	tableName: "IS_COMMENT",
	timestamps: false 
})
export class IS_COMMENT extends Model<IS_COMMENTAttributes, IS_COMMENTAttributes> implements IS_COMMENTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_PARENT_LID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_CHART?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_COMMENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MEDIADATA?: string;

}