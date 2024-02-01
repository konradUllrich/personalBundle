import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_CONTACTAttributes {
    STR_RANDOM_GUID?: string;
    B_CONFIRMED?: boolean;
    DTINSERT?: Date;
    DTEDIT?: Date;
    REF_CONTACT_B_PROFILE_ID?: string;
    STR_REQUEST?: string;
    REF_CONTACT_A_PROFILE_ID?: string;
    LID: number;
    LUSERIDINSERT?: number;
    LUSERID?: number;
}

@Table({
	tableName: "IS_CONTACT",
	timestamps: false 
})
export class IS_CONTACT extends Model<IS_CONTACTAttributes, IS_CONTACTAttributes> implements IS_CONTACTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RANDOM_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CONFIRMED?: boolean;

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
    	type: DataType.STRING(255) 
    })
    	REF_CONTACT_B_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_REQUEST?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_CONTACT_A_PROFILE_ID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

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

}