import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PROFILE_SETTINGAttributes {
    LUSERIDINSERT?: number;
    LUSERID?: number;
    REF_BLOCKED_USER_GUID?: string;
    DTINSERT?: Date;
    LID: number;
    FKSTRID?: string;
    DTEDIT?: Date;
}

@Table({
	tableName: "IS_PROFILE_SETTING",
	timestamps: false 
})
export class IS_PROFILE_SETTING extends Model<IS_PROFILE_SETTINGAttributes, IS_PROFILE_SETTINGAttributes> implements IS_PROFILE_SETTINGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BLOCKED_USER_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}