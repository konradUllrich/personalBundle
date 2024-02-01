import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_GROUP_BIDAttributes {
    REF_CANDIDATE_PROFILE_ID?: string;
    FKSTRID?: string;
    DTINSERT?: Date;
    DTEDIT?: Date;
    TXT_MESSAGE?: string;
    LUSERIDINSERT?: number;
    LID: number;
    LUSERID?: number;
}

@Table({
	tableName: "IS_GROUP_BID",
	timestamps: false 
})
export class IS_GROUP_BID extends Model<IS_GROUP_BIDAttributes, IS_GROUP_BIDAttributes> implements IS_GROUP_BIDAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_CANDIDATE_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MESSAGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}